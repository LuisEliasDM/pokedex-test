import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {
  public myPokemonIds!: number[];

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.myPokemonIds = this.profileService.getUserPokemons()
  }

  showPokemon(pokemonId: number){
    this.router.navigate(['/pokedex/show/' + pokemonId])
  }
}
