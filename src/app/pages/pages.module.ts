import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
    declarations: [LayoutComponent, BusquedaComponent, NuevoHeroeComponent, EditarHeroeComponent, ListadoComponent, HeroeComponent],
    imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
