import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './dashboard/product/product.component';
import {StockComponent} from './dashboard/stock/stock.component';

const routes: Routes = [
  { path: 'stock', component: StockComponent},
  { path: 'news', component: ProductComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
