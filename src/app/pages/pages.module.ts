import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from '../components/components.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HeroeComponent } from './heroe/heroe.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [LayoutComponent, BusquedaComponent, ListadoComponent, HeroeComponent],
    imports: [SharedModule, ComponentsModule, PagesRoutingModule],
    providers: []
})
export class PagesModule {}
