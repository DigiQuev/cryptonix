import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCryptoComponent } from './select-crypto.component';

const routes: Routes = [{ path: '', component: SelectCryptoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectCryptoRoutingModule { }
