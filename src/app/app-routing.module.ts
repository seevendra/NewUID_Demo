import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockComponent} from './dashboard/stock/stock.component';

const routes: Routes = [
  { path: 'stock', component: StockComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
