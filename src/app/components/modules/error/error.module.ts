import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorFormComponent } from './show-error-form/show-error-form.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowErrorFormComponent,
    NotFoundComponent
  ]
})
export class ErrorModule { }
