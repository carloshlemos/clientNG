import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CarService } from './shared/car/car.service';

/*PrimeNG*/
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
