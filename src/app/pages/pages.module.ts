import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ListadoService } from '../services/listado.service';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { HeroeComponent } from './heroe/heroe.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';

@NgModule({
    declarations: [LayoutComponent, BusquedaComponent, NuevoHeroeComponent, EditarHeroeComponent, ListadoComponent, HeroeComponent],
    imports: [SharedModule, PagesRoutingModule],
    providers: [ListadoService]
})
export class PagesModule {}
