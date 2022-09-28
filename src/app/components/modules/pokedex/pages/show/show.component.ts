import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  public id!: number;
  public pokemon!: any;
  public alreadyHave: boolean = false;
  @ViewChild("card", {static:true}) card!: ElementRef;

  constructor(private router:Router, private renderer2: Renderer2, private pokemonService:PokemonService, private activatedRoute: ActivatedRoute, private profileService:ProfileService) { }

  ngOnInit(): void {
    if(this.profileService.getUserPokemons().indexOf(this.id) >= 0){
      this.alreadyHave = true
    }
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    this.pokemonService.consultById(this.id).subscribe(response => {
      this.pokemon = response.response
      console.log(this.pokemon);
    })
  }

  addPokemon(){
    this.profileService.addUserPokemon(this.id)
    this.router.navigate(['pokedex/dashboard'])
  }

}
