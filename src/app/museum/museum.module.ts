import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { ExhibicionListComponent } from './../exhibicion/exhibicion-list/exhibicion-list.component';
import { MuseumCreateComponent } from './museum-create/museum-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
    ],
  exports: [
    MuseumDetailComponent,
    MuseumCreateComponent],
  declarations: [
    MuseumListComponent,
    MuseumDetailComponent,
    ExhibicionListComponent,
    MuseumCreateComponent]
})
export class MuseumModule { }
