import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from '../components/components.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HeroeComponent } from './heroe/heroe.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { RecursoInexistenteComponent } from './recurso-inexistente/recurso-inexistente.component';

@NgModule({
    declarations: [LayoutComponent, BusquedaComponent, ListadoComponent, HeroeComponent, RecursoInexistenteComponent],
    imports: [SharedModule, ComponentsModule, PagesRoutingModule],
    providers: []
})
export class PagesModule {}
