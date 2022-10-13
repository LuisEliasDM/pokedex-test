import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonUrl: string = "";
  @Input() id: number = -1;
  public pokemon$!: Observable<any>;
  public alreadyHave: boolean = false;

  constructor(private pokemonService:PokemonService, private profileService: ProfileService) { }

  ngOnInit(): void {
    if(this.pokemonUrl != ""){
      this.id = this.pokemonService.getIdFronUrl(this.pokemonUrl)
    }
    if(this.profileService.alreadyHavePokemon(this.id)){
      this.alreadyHave = true
    }
    this.pokemon$ = this.pokemonService.consultById(this.id)
  }

}
