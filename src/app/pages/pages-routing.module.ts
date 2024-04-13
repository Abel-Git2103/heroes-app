import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { globalResolver } from '../resolvers/global.resolver';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { HeroeComponent } from './heroe/heroe.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'busqueda',
                component: BusquedaComponent,
                resolve: { busquedaData: globalResolver }
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
                component: ListadoComponent,
                resolve: { listadoData: globalResolver }
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
