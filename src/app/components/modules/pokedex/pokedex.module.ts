import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokedexRoutingModule } from './pokedes-routing.module';
import { CardComponent } from './card/card.component';
import { ShowComponent } from './show/show.component';
import { AlreadyHaveDirective } from 'src/app/directives/already-have.directive';
import { MyPokemonsComponent } from './my-pokemons/my-pokemons.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    ShowComponent,
    AlreadyHaveDirective,
    MyPokemonsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
