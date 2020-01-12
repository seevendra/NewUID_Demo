import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material';

import {Component} from '@angular/core';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { StockComponent } from './dashboard/stock/stock.component';
import { ProductComponent } from './dashboard/product/product.component';

import {CovalentLayoutModule, CovalentMediaModule,CovalentDataTableModule } from '@covalent/core';
import {CommonModule} from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {MatListModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from "@angular/material";
import {MatTabsModule} from "@angular/material";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './dashboard/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentMenuModule } from '@covalent/core/menu';

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    AppHeaderComponent,
    StockComponent,
    ProductComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    CommonModule,
    CovalentLayoutModule,
    CovalentDataTableModule,
    CovalentNotificationsModule,
    CovalentSearchModule,
    CovalentMenuModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
