import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/libs/helpers/storage.helper';
import { SessionModel } from 'src/app/models/session.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(){
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password

    this.loginForm.markAsDirty()
    this.markAllAsDirty()
    this.loginForm.markAllAsTouched()

    if(this.loginForm.invalid) return

    this.authService.login(username, password).subscribe({
      next: (response) => {
        if(!response){
          return alert("Username or password incorrect")
        }

        // Se guarda la información del usuario
        // Solo se hace para tener datos que mostrar en el sistema
        let user: UserModel = {
          curp: "DOML000813HOCMRSA7",
          name: "Luis Elias",
          lastname: "Dominguez Morales",
          birth: "2000-08-13",
          cp: "12345",
        }
        StorageHelper.setItem("user", user)

        // Se guarda la infromación de la sesión
        let session: SessionModel = {
          username: response.username,
          email: response.email,
          token: response.token
        }
        StorageHelper.setItem("session", session)

        // Se guarda el estado de la session
        let isAuthenticated = true
        StorageHelper.setSessionStatus(isAuthenticated)
        this.router.navigate(['pokedex/dashboard'])

      }
    })
  }

  markAllAsDirty(){
    this.loginForm.get("username")?.markAsDirty()
    this.loginForm.get("password")?.markAsDirty()
  }

}
