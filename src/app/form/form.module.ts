import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormModule { }
