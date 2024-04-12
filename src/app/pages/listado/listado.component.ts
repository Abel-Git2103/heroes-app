import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/services/listado.service';
import { Constants } from 'src/app/shared/models/constants.model';
import { Heroe } from 'src/app/shared/models/heroe.model';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    /* Propiedades del listado */
    public listadoHeroes: Heroe[] = [];

    constructor(private listadoService: ListadoService) {}

    ngOnInit(): void {
        this.getHeroesList();
    }

    /* PUBLIC METHODS */

    /* PRIVATE METHODS */
    private getHeroesList() {
        this.listadoService.obtenerListadoHeroes().subscribe({
            next: (listado: Heroe[]) => {
                this.listadoHeroes = listado;
            },
            error: (e: any) => {
                alert('Error: ' + e.message);
            }
        });
    }
}
