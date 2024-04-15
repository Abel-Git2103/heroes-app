import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';
import { HeroesService } from 'src/app/services/heroes.service';
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

    /* Propiedades constantes */
    public URLS = Object.freeze(Constants.appUrls);

    /* Inyección de dependencias */
    private _route: ActivatedRoute = inject(ActivatedRoute);
    private _router: Router = inject(Router);
    private _dialog: MatDialog = inject(MatDialog);
    private _heroesService: HeroesService = inject(HeroesService);

    ngOnInit(): void {
        this._getHeroesList();
    }

    /* PUBLIC METHODS */
    /* Al hacer click en el botón eliminar, se llama para abrir el diálogo de confirmación */
    confirmDialogDelete(id: string) {
        this._dialog.open(DialogoConfirmacionComponent, {
            width: '450px',
            id: 'confirmDialogDelete'
        });

        /* Al cerrar el diálogo, mira si el indicador recibido es el de confirmación de borrado para eliminar el héroe */
        this._dialog
            .getDialogById('confirmDialogDelete')
            ?.afterClosed()
            .subscribe((flagDelete: boolean) => {
                if (flagDelete) {
                    this._heroesService.eliminarHeroe(id).subscribe({
                        next: (flagDelete: boolean) => {
                            if (flagDelete) {
                                this._getHeroesListFromService();
                            }
                        },
                        error: (e: any) => {
                            console.log(e);
                        }
                    });
                }
            });
    }

    /* Navega a la página indicada */
    navigateToEdit(id: string) {
        this._router.navigate([this.URLS.editarHeroe, id]);
    }

    /* PRIVATE METHODS */
    /* Obtiene el listado de héroes del resolver */
    private _getHeroesList() {
        this.listadoHeroes = this._route.snapshot.data['listadoData'];
    }

    /* Obtiene del servicio el listado de heroes después de eliminar uno para recargar el listado */
    private _getHeroesListFromService() {
        this._heroesService.obtenerListadoHeroes().subscribe({
            next: (listadoHeroes: Heroe[]) => {
                this.listadoHeroes = listadoHeroes;
            },
            error: (e: any) => {
                console.log(e);
            }
        });
    }
}
