import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { globalResolver } from '../resolvers/global.resolver';
import { Constants } from '../shared/models/constants.model';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HeroeComponent } from './heroe/heroe.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { RecursoInexistenteComponent } from './recurso-inexistente/recurso-inexistente.component';

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
                component: HeroeComponent,
                data: { mode: Constants.pageHeroMode[2] }
            },
            {
                path: 'editar-heroe/:id',
                component: HeroeComponent,
                data: { mode: Constants.pageHeroMode[1] },
                resolve: { heroe: globalResolver, id: globalResolver }
            },
            {
                path: 'listado',
                component: ListadoComponent,
                resolve: { listadoData: globalResolver }
            },
            // TODO: Visualizar pantalla de héroe
            /*             {
                path: 'heroe/:id',
                component: HeroeComponent,
                data: { mode: Constants.pageHeroMode[0] }
            }, */
            {
                path: 'recurso-inexistente',
                component: RecursoInexistenteComponent
            },
            {
                path: '**',
                redirectTo: 'recurso-inexistente'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
