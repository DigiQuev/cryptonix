import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectCryptoRoutingModule } from './select-crypto-routing.module';
import { SelectCryptoComponent } from './select-crypto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SelectCryptoComponent
  ],
  imports: [
    CommonModule,
    SelectCryptoRoutingModule,
    HttpClientModule
  ]
})
export class SelectCryptoModule { }
