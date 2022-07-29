import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './homePage.component';
import { CarruselComponent } from '../carrusel/carrusel.component';


@NgModule({
  imports: [CommonModule, RouterModule ],
  exports: [HomePageComponent,CarruselComponent],
  declarations: [HomePageComponent,CarruselComponent]
})
export class HomePageModule { }
