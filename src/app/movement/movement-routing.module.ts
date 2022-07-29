import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
// 6. Importar componente crear
import { MovementCreateComponent } from './movement-create/movement-create.component';


const routes: Routes = [{
  path: 'movements',
  children: [
        // 7. Crear la ruta Crear autor -> probar en el menú
    // 8. Ir a movement-create.component.ts
    {
      path: 'create',
      component: MovementCreateComponent
    },
    //



    {
      path: 'list',
      component: MovementListComponent
    },
    {
      path: ':id',
      component: MovementDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementRoutingModule { }
