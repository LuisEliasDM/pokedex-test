import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { AgePipe } from 'src/app/libs/pipes/age.pipe';



@NgModule({
  declarations: [
    ProfileComponent,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
