import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/libs/helpers/storage.helper';
import { SessionModel } from 'src/app/models/session.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  public registerForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      curp: new FormControl('', [
        Validators.required,
        Validators.minLength(18)
      ]),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birth: new FormControl('', Validators.required),
      cp: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    })
  }

  register(){
    let curp = this.registerForm.value.curp;
    let name = this.registerForm.value.name;
    let lastname = this.registerForm.value.lastname;
    let birth = this.registerForm.value.birth;
    let cp = this.registerForm.value.cp;
    let email = this.registerForm.value.email;
    let username = this.registerForm.value.username;
    let password = this.registerForm.value.password;

    this.registerForm.markAsDirty()
    this.markAllAsDirty()
    this.registerForm.markAllAsTouched()

    if(this.registerForm.invalid) return

    this.authService.register(username, password, email).subscribe({
      next: (response) => {
        if(!response){
          return alert("El nombre de usuario ya se encuantra ocupado")
        }

        // Se guarda la información del usuario
        let user: UserModel = {
          curp: curp,
          name: name,
          lastname: lastname,
          birth: birth,
          cp: cp,
        }
        StorageHelper.setItem("user", user)

        this.authService.login(username, password).subscribe({
          next: (response: any) => {
            if(!response){
              this.router.navigate(['auth/login']);
              return
            }

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
            this.router.navigate(['pokedex/dashboard']);
          }
        })
      }
    })
  }

  markAllAsDirty(){
    this.registerForm.get("curp")?.markAsDirty()
    this.registerForm.get("name")?.markAsDirty()
    this.registerForm.get("lastname")?.markAsDirty()
    this.registerForm.get("birth")?.markAsDirty()
    this.registerForm.get("cp")?.markAsDirty()
    this.registerForm.get("email")?.markAsDirty()
    this.registerForm.get("username")?.markAsDirty()
    this.registerForm.get("password")?.markAsDirty()
  }

}
