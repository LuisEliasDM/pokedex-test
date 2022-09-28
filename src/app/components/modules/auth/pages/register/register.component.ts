import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  register(){
    let curp = this.registerForm.value.curp;
    let name = this.registerForm.value.name;
    let lastname = this.registerForm.value.lastname;
    let birth = this.registerForm.value.birth;
    let username = this.registerForm.value.username;
    let password = this.registerForm.value.password;

    this.registerForm.markAsDirty()
    this.markAllAsDirty()
    this.registerForm.markAllAsTouched()

    if(this.registerForm.invalid) return

    this.authService.register(username, password, curp, name, lastname, birth);
    if(this.authService.isAuthenticated) this.router.navigate(['pokedex/dashboard']);
  }

  markAllAsDirty(){
    this.registerForm.get("curp")?.markAsDirty()
    this.registerForm.get("name")?.markAsDirty()
    this.registerForm.get("lastname")?.markAsDirty()
    this.registerForm.get("birth")?.markAsDirty()
    this.registerForm.get("username")?.markAsDirty()
    this.registerForm.get("password")?.markAsDirty()
  }

}
