import { AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit{
  public id!: number;
  public pokemon$!: Observable<any>;
  public alreadyHave: boolean = false;

  constructor(private renderer2: Renderer2, private pokemonService:PokemonService, private activatedRoute: ActivatedRoute, public profileService:ProfileService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    if(this.profileService.alreadyHavePokemon(this.id)){
      this.alreadyHave = true
    }
    this.pokemon$ = this.pokemonService.consultById(this.id)
  }
  addPokemon(){
    this.profileService.addUserPokemon(this.id)
  }

  removePokemon(){
    this.profileService.removeUserPokemon(this.id)
  }

}
