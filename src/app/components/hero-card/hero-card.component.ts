import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
    @Input() heroe: Heroe = new Heroe();
    @Output() actualizarListado: EventEmitter<boolean> = new EventEmitter<boolean>();

    /* Inyección de dependencias */
    private _heroesService: HeroesService = inject(HeroesService);
    private _dialog: MatDialog = inject(MatDialog);
    private _snackBar: MatSnackBar = inject(MatSnackBar);

    /* PUBLIC METHODS */
    /* Al hacer click en el botón eliminar, se llama para abrir el diálogo de confirmación */
    confirmDialogDelete(id: string) {
        const dialog = this._dialog.open(DialogoConfirmacionComponent, {
            width: '450px',
            id: 'confirmDialogDelete'
        });

        /* Al cerrar el diálogo, mira si el indicador recibido es el de confirmación de borrado para eliminar el héroe */
        dialog.afterClosed().subscribe((flagDelete: boolean) => {
            if (flagDelete) {
                this._heroesService.eliminarHeroe(id).subscribe({
                    next: (flagDelete: boolean) => {
                        if (flagDelete) {
                            this._snackBar.open('Héroe eliminado correctamente', 'Cerrar');
                            this._updateHeroesList();
                        }
                    },
                    error: () => {
                        this._snackBar.open('Se ha producido un error al eliminar el héroe', 'Cerrar');
                    }
                });
            }
        });
    }

    /* Obtiene del servicio el listado de heroes después de eliminar uno para recargar el listado */
    private _updateHeroesList() {
        this.actualizarListado.emit(true);
    }
}
