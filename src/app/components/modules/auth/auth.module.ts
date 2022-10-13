import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ShowErrorFormComponent } from '../error/show-error-form/show-error-form.component';
import { TransformTextDirective } from 'src/app/directives/transform-text.directive';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TransformTextDirective,
    ShowErrorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
