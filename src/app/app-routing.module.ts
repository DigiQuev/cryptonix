import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path : 'home', component : HomeComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'select-crypto', loadChildren: () => import('./select-crypto/select-crypto.module').then(m => m.SelectCryptoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
