import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PokedexRoutingModule } from './pokedes-routing.module';
import { CardComponent } from './pages/dashboard/card/card.component';
import { ShowComponent } from './pages/show/show.component';
import { AlreadyHaveDirective } from 'src/app/directives/already-have.directive';



@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    ShowComponent,
    AlreadyHaveDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
