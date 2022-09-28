import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public pokemonsResponse: any;
  public limit!: number;
  public offset!: number;
  public pageNumber!: number;

  constructor(private pokemonService: PokemonService, private router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.limit = 30;
    this.pageNumber = 1;
    this.activatedRoute.data.subscribe(response => {
      this.pokemonsResponse = response['pokemons'].response;
    })
  }

  showPokemon(url: string){
    let id = this.pokemonService.getIdFronUrl(url)
    this.router.navigate(['/pokedex/show/' + id])
  }

  changePage(pageNumber: number){
    if(pageNumber <= 0) return;
    this.pageNumber = pageNumber
    this.pokemonService.list(this.pageNumber).subscribe(response => {
      this.pokemonsResponse = response.response;
    })
  }

  changeLimit(numberPage: number){
  }

}
