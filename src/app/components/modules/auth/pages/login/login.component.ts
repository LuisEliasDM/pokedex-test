import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    this.authService.login(username, password)
    if(!this.authService.isAuthenticated) alert("Wrong username or password")

    this.router.navigate(['pokedex/dashboard'])
  }

  markAllAsDirty(){
    this.loginForm.get("username")?.markAsDirty()
    this.loginForm.get("password")?.markAsDirty()
  }

}
