import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public pokemonsResponse$!: Observable<any>;
  public limit!: number;
  public offset!: number;
  public pageNumber!: number;

  constructor(public profileService:ProfileService, public pokemonService: PokemonService, private router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.limit = 30;
    this.pageNumber = 1;
    this.pokemonsResponse$ = this.pokemonService.list(this.pageNumber)
  }

  showPokemon(url: string){
    let id = this.pokemonService.getIdFronUrl(url)
    this.router.navigate(['/pokedex/show/' + id])
  }

  changePage(pageNumber: number){
    if(pageNumber <= 0) return;
    this.pageNumber = pageNumber
    this.pokemonsResponse$ = this.pokemonService.list(this.pageNumber)
  }

  changeLimit(numberPage: number){
  }

}
