import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getUser(){
    return {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
      curp: localStorage.getItem("curp"),
      name: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
      birth: localStorage.getItem("birth"),
    }
  }

  getUserPokemons(): number[]{
    if(localStorage.getItem("pokemons") == null) return [];
    return JSON.parse(localStorage.getItem("pokemons")??"");
  }

  addUserPokemon(id: number){
    let pokemons;
    if(localStorage.getItem("pokemons") == null){
      pokemons = [];
    }else{
      pokemons = JSON.parse(localStorage.getItem("pokemons")??"");
    }

    if(this.getUserPokemons().indexOf(id) >= 0) return;

    pokemons.push(id)

    localStorage.setItem("pokemons", JSON.stringify(pokemons))

  }
}
