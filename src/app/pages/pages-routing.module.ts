import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'busqueda',
                component: BusquedaComponent
            },
            {
                path: 'nuevo-heroe',
                component: NuevoHeroeComponent
            },
            {
                path: 'editar-heroe/:id',
                component: EditarHeroeComponent
            },
            {
                path: 'listado',
                component: ListadoComponent
            },
            {
                path: 'heroe/:id',
                component: HeroeComponent
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
