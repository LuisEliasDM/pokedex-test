import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  list(pageNumber?: number, limit?: number){
    let offset = 0;
    if(limit == undefined) limit = 30;
    if(pageNumber != undefined){
      offset = (limit * pageNumber) - limit
    }

    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).pipe(
      map((response: any) => {
        return {
          response: response
        }
      })
    )
  }

  consultById(id: number){
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/" + id).pipe(
      map((response: any) => {
        return {
          response: response
        }
      })
    )
  }

  getIdFronUrl(url: string){
    let elementsUrl = url.split("/");
    let id = elementsUrl[elementsUrl.length - 2];

    return parseInt(id);
  }
}
