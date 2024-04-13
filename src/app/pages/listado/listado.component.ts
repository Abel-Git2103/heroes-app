import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';
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

    ngOnInit(): void {
        this._getHeroesList();
    }

    /* PUBLIC METHODS */
    /* Al hacer click en el botón eliminar, se llama para abrir el diálogo de confirmación */
    confirmDialogDelete() {
        this._dialog.open(DialogoConfirmacionComponent, {
            width: '450px'
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
}
