import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibicionDetailComponent } from './../exhibicion/exhibicion-detail/exhibicion-detail.component';
import { SponsorCreateComponent } from '../sponsor/sponsor-create/sponsor-create.component';
import { ExhibicionListComponent } from '../exhibicion/exhibicion-list/exhibicion-list.component'
import { ExhibicionCreateComponent } from './exhibicion-create/exhibicion-create.component';
import { MuseumListComponent } from '../museum/museum-list/museum-list.component';

const routes: Routes = [{
  path: 'exhibicion',
  children: [
    {
      path: 'createSponsor',
      component: SponsorCreateComponent
    },
    {
      path: 'createExhibicion',
      component: ExhibicionCreateComponent
    },
    {
      path: 'listExhibiciones',
      component: ExhibicionListComponent
    },
    {
      path: ':idMuseum',
      component: ExhibicionListComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibicionRoutingModule { }
