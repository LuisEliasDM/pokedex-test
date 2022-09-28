import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListResolver } from 'src/app/services/resolvers/pokemon-list.resolver';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        resolve: {
          pokemons: PokemonListResolver
        }
      },
      {
        path: "show/:id",
        component: ShowComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
