import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonModel } from '../models/pokemon.model';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  list(pageNumber?: number, limit?: number): Observable<any>{
    let offset = 0;
    if(limit == undefined) limit = 30;

    if(pageNumber != undefined){
      offset = (limit * pageNumber) - limit
    }

    return this.httpClient.post(Endpoints.GENERAL_URL + Endpoints.POKEMON_URL, {
      endpoint: Endpoints.getPokemonsList(limit, offset)
    }).pipe(
      map((response)=>{
        return response
      })
    )
  }

  consultById(id: number): Observable<any>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/" + id).pipe(
      map((response: any) => {
        let pokemon: PokemonModel = {
          urlImage: response.sprites?.other['official-artwork']?.front_default,
          urlIcon: response.sprites?.front_default,
          name: response.name,
          hp: response.stats[0]?.base_stat,
          attack: response.stats[1]?.base_stat,
          special: response.stats[3]?.base_stat,
          defending: response.stats[2]?.base_stat,
          types: response.types
        }
        return pokemon
      })
    )
  }

  getIdFronUrl(url: string){
    let elementsUrl = url.split("/");
    let id = elementsUrl[elementsUrl.length - 2];

    return parseInt(id);
  }
}
