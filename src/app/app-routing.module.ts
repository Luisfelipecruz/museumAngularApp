import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homePage/homePage.component'
import { ArtworkListComponent } from './artwork/artwork-list/artwork-list.component';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { ExhibicionListComponent } from './exhibicion/exhibicion-list/exhibicion-list.component'
import { SponsorCreateComponent } from './sponsor/sponsor-create/sponsor-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'artwork', component: ArtworkListComponent },
  { path: 'artwork/:id', component: ArtworkListComponent },
  { path: 'museum', component: MuseumListComponent },
  { path: 'museum/:id', component: MuseumListComponent },
  { path: 'artist', component: ArtistListComponent },
  { path: 'exhibition/:navbar', component: ExhibicionListComponent },
  { path: 'createSponsor', component: SponsorCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
