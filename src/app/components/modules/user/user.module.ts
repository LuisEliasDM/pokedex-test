import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { AgePipe } from 'src/app/libs/pipes/age.pipe';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    ProfileComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
