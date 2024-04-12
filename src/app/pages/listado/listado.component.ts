import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';
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

    constructor(private listadoService: ListadoService, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.getHeroesList();
    }

    /* PUBLIC METHODS */
    /* Al hacer click en el botón eliminar, se llama para abrir el diálogo de confirmación */
    public confirmDialogDelete() {
        this.dialog.open(DialogoConfirmacionComponent, {
            width: '450px'
        });
    }

    /* PRIVATE METHODS */
    /* Obtiene el listado de héroes del servicio */
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
