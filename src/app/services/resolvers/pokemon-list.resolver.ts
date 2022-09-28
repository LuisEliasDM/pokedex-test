import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<boolean> {

  constructor(private pokemonService: PokemonService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.pokemonService.list();
  }
}
