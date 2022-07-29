import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
import { RouterModule } from '@angular/router';
import { MovementRoutingModule } from './movement-routing.module';
// 1. Importamos la libreria de formularios
import { ReactiveFormsModule } from '@angular/forms';
// 2. Creamos el componente movement-create -->  html app.
import { MovementCreateComponent } from './movement-create/movement-create.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MovementRoutingModule,
    ReactiveFormsModule //1
  ],
  declarations: [MovementListComponent,
               MovementDetailComponent,
               MovementCreateComponent //2
              ],
   exports: [MovementListComponent],
})
export class MovementModule { }



//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
  //import { MovementComponent } from './movement.component';
  //7.1 binding - Componentes -
//import { MovementListComponent } from './movement-list/movement-list.component';
//import { MovementDetailComponent } from './movement-detail/movement-detail.component';
//@NgModule({
 // imports: [
 //   CommonModule
 // ],
 // declarations: [
 //   MovementListComponent, //7.1.
  //  MovementDetailComponent], //7.1.-->Crear servicio en movement
//})
//export class MovementModule { }
