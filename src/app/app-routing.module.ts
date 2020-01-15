import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockComponent} from './dashboard/stock/stock.component';
import { SpeechComponent } from './speech/speech.component';

const routes: Routes = [
  { path: 'speech', component: SpeechComponent},
  { path: 'stock', component: StockComponent},
  { path: '', redirectTo: '/stock', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
