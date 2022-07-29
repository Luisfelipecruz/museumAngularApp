import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SponsorComponent } from './sponsor.component';
import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SponsorComponent
  ],
  declarations: [
    SponsorComponent
  ]
})
export class SponsorModule { }
