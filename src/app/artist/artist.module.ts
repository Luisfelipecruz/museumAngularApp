import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { RouterModule } from '@angular/router';
import { ArtistRoutingModule } from './artist-routing.module';
// 1. Importamos la libreria de formularios
import { ReactiveFormsModule } from '@angular/forms';
// 2. Creamos el componente artist-create -->  html app.
import { ArtistCreateComponent } from './artist-create/artist-create.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ArtistRoutingModule,
    ReactiveFormsModule //1
  ],
  declarations: [ArtistListComponent,
               ArtistDetailComponent,
               ArtistCreateComponent //2
              ]
})
export class ArtistModule { }



//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
  //import { ArtistComponent } from './artist.component';
  //7.1 binding - Componentes -
//import { ArtistListComponent } from './artist-list/artist-list.component';
//import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
//@NgModule({
 // imports: [
 //   CommonModule
 // ],
 // declarations: [
 //   ArtistListComponent, //7.1.
  //  ArtistDetailComponent], //7.1.-->Crear servicio en artist
//})
//export class ArtistModule { }
