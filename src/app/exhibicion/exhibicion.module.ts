import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ArtworkListComponent } from '../artwork/artwork-list/artwork-list.component';
import { ArtworkDetailComponent } from '../artwork/artwork-detail/artwork-detail.component';
import { ArtworkCreateComponent } from '../artwork/artwork-create/artwork-create.component';
import { ExhibicionDetailComponent } from './../exhibicion/exhibicion-detail/exhibicion-detail.component';
import { SponsorCreateComponent } from '../sponsor/sponsor-create/sponsor-create.component';
import { ExhibicionCreateComponent } from './exhibicion-create/exhibicion-create.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ExhibicionDetailComponent,
    ExhibicionCreateComponent
  ],
  declarations: [
    ExhibicionDetailComponent,
    ExhibicionCreateComponent,
    ArtworkDetailComponent,
    ArtworkCreateComponent,
    ArtworkListComponent,
    SponsorCreateComponent
  ],
})
export class ExhibicionModule {}
