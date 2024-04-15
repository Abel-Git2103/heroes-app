import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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

    private _heroesService: HeroesService = inject(HeroesService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);

    ngOnInit(): void {
        this._getHeroesList();
    }

    /* PUBLIC METHODS */
    /* Navega a la página indicada */
    navigateToEdit(id: string) {
        this._router.navigate([this.URLS.editarHeroe, id]);
    }

    /* Obtiene del servicio el listado de heroes después de eliminar uno para recargar el listado */
    updateHeroesList() {
        this._heroesService.obtenerListadoHeroes().subscribe({
            next: (listadoHeroes: Heroe[]) => {
                this.listadoHeroes = listadoHeroes;
            },
            error: () => {
                this._snackBar.open('Se ha producido un error al actualizar el listado', 'Cerrar');
            }
        });
    }

    /* PRIVATE METHODS */
    /* Obtiene el listado de héroes del resolver */
    private _getHeroesList() {
        this.listadoHeroes = this._route.snapshot.data['listadoData'];
    }
}
