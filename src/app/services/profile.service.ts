import { Injectable } from '@angular/core';
import { StorageHelper } from '../libs/helpers/storage.helper';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getUser(){
    return StorageHelper.getItem("user")
  }

  getUserPokemons(): number[]{
    let pokemons = StorageHelper.getItem("pokemons")
    if(pokemons == null) return [];
    return pokemons;
  }

  addUserPokemon(id: number){
    if(this.alreadyHavePokemon(id)) return

    let pokemons = this.getUserPokemons()
    pokemons.push(id)

    StorageHelper.setItem("pokemons", pokemons)
  }

  removeUserPokemon(id: number){
    if(!this.alreadyHavePokemon(id)) return

    let pokemons = this.getUserPokemons()
    pokemons = pokemons.filter(item => item != id)

    StorageHelper.setItem("pokemons", pokemons)
  }

  alreadyHavePokemon(id: number): boolean{
    if(this.getUserPokemons().indexOf(id) >= 0) return true;
    return false
  }
}
