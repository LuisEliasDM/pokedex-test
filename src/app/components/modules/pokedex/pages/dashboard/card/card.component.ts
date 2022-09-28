import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonUrl: any;
  public pokemon: any;
  public alreadyHave: boolean = false;

  constructor(private pokemonService:PokemonService, private profileService: ProfileService) { }

  ngOnInit(): void {
    let id = this.pokemonService.getIdFronUrl(this.pokemonUrl)
    if(this.profileService.getUserPokemons().indexOf(id) >= 0){
      this.alreadyHave = true
    }
    this.pokemonService.consultById(id).subscribe(response => {
      this.pokemon = response.response;
    })
  }

}
