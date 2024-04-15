import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/shared/models/heroe.model';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
    /* Propiedades del formulario */
    public searchForm!: FormGroup;
    public inputSearchControl: FormControl = new FormControl('');
    public heroesAlias: string[] = [];
    public filteredOptions!: Observable<string[]>;
    public filterData: boolean = false;
    public heroeSelected!: Heroe;

    /* Inyección de dependencias */
    private _route: ActivatedRoute = inject(ActivatedRoute);
    private _heroesService: HeroesService = inject(HeroesService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);

    ngOnInit() {
        this.initForm();
    }

    /* PUBLIC METHODS */
    /* Inicializa el formulario y el observable del input para llamar a la función de filtrado */
    initForm() {
        this.heroesAlias = this._route.snapshot.data['busquedaData'];

        this.inputSearchControl = new FormControl('', Validators.required);

        this.filteredOptions = this.inputSearchControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filterData(value || ''))
        );
    }

    /* Permite seleccionar al héroe y cargar sus datos */
    seleccionarHeroe() {
        const id: string = this.inputSearchControl.value.toLowerCase();

        this._heroesService.obtenerHeroePorId(id).subscribe({
            next: (heroe: Heroe) => {
                this.heroeSelected = heroe;
            },
            error: () => {
                this._snackBar.open('Se ha producido un error al obtener el héroe seleccionado', 'Cerrar');
            }
        });
    }

    /* PRIVATE METHODS */
    /* Permite filtrar en el listado de alias de héroes según el texto introducido en el input */
    private _filterData(value: string): string[] {
        const filterValue = value.toLowerCase();
        const dataFiltered: string[] = this.heroesAlias.filter((option) => option.toLowerCase().startsWith(filterValue));
        this.filterData = dataFiltered?.length > 0;

        return dataFiltered;
    }
}
