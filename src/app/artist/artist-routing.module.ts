import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
// 6. Importar componente crear
import { ArtistCreateComponent } from './artist-create/artist-create.component';


const routes: Routes = [{
  path: 'artists',
  children: [
        // 7. Crear la ruta Crear autor -> probar en el menú
    // 8. Ir a artist-create.component.ts
    {
      path: 'create',
      component: ArtistCreateComponent
    },
    //



    {
      path: 'list',
      component: ArtistListComponent
    },
    {
      path: ':id',
      component: ArtistDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
