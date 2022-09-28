import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  public isAuthenticated: boolean = false;

  constructor() {
    this.isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  }

  login(username: string, password: string){
    let usernameDb = localStorage.getItem("username")
    let passwordDb = localStorage.getItem("password")

    if(username === usernameDb && password === passwordDb){
      this.isAuthenticated = true;
    }
    localStorage.setItem("isAuthenticated", this.isAuthenticated.toString());
  }

  logout(){
    this.isAuthenticated = false
    localStorage.setItem("isAuthenticated", this.isAuthenticated.toString());
  }

  register(username: string, password: string, curp: string, name: string, lastname: string, birth: string){
    this.isAuthenticated = true
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    localStorage.setItem("curp", curp)
    localStorage.setItem("name", name)
    localStorage.setItem("lastname", lastname)
    localStorage.setItem("birth", birth)
    localStorage.setItem("isAuthenticated", this.isAuthenticated.toString());
  }
}
