import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NgTemplateOutlet } from '@angular/common';
import { AfterContentChecked, Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { ClaveValor, Constants } from 'src/app/shared/models/constants.model';
import { Heroe } from 'src/app/shared/models/heroe.model';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit, AfterContentChecked {
    @ViewChild('edicionTemplate') edicionTemplate!: TemplateRef<NgTemplateOutlet>;
    @ViewChild('readOnlyTemplate') readOnlyTemplate!: TemplateRef<NgTemplateOutlet>;

    /* Inyección de dependencias */
    private _route: ActivatedRoute = inject(ActivatedRoute);
    private _router: Router = inject(Router);
    private _formBuilder: FormBuilder = inject(FormBuilder);
    private _heroesService: HeroesService = inject(HeroesService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);

    /* Propiedades constantes */
    public PAGEMODES = Object.freeze(Constants.pageHeroMode);
    public URLS = Object.freeze(Constants.appUrls);

    /* Propiedades de los templates */
    public modePage!: ClaveValor;
    public selectedTemplate!: TemplateRef<any>;
    public heroeForm!: FormGroup;
    public heroe: Heroe = new Heroe();
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public maxChips: boolean = false;

    /* Recupera los valores del formulario */
    get heroeActual(): Heroe {
        const heroe: Heroe = this.heroeForm.value as Heroe;
        return heroe;
    }

    ngOnInit() {
        /* Recuperamos el modo de página para mostrar el tamplate correspondiente si es alta, edición o visualización */
        this.modePage = this._route.snapshot.data['mode'];

        /* Recuperamos los datos del heroe del resolver */
        if (this._route.snapshot.data['heroe']) {
            this.heroe = this._route.snapshot.data['heroe'];
        }

        this._initForm();
    }

    ngAfterContentChecked() {
        this.selectedTemplate = this._selectTemplateRef(this.modePage.clave);
    }

    /* Inserta en el array de poderes el poder introducido en el input */
    insertarPoder(event: MatChipInputEvent) {
        let value = (event.value || '').trim();

        // Añadimos el poder al array
        if (value) {
            /* Capitalizamos la primera letra y las demás en minúsculas */
            value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

            this.heroe.poderes.push(value);
        }

        // Limpiamos los datos del input despúes de insertarlo al array
        event.chipInput!.clear();
        this.heroeForm.get('poderes')?.setValue([]);

        /* Oculto errores required si los hay */
        this.heroeForm.get('poderes')?.setErrors(null);
    }

    /* Elimina del array de poderes el poder seleccionado */
    eliminarPoder(poder: string) {
        const index = this.heroe.poderes.indexOf(poder);

        if (index >= 0) {
            this.heroe.poderes.splice(index, 1);
        }

        /* Valido si el array de poderes tiene datos para mostrar u ocultar el error required */
        this.heroe?.poderes.length > 0 ? this.heroeForm.get('poderes')?.setErrors(null) : this.heroeForm.get('poderes')?.setErrors({ required: true });
    }

    /* Permite insertar o modificar el héroe en función del modo en el que me encuentre (0,1,2) */
    guardarHeroe() {
        if (this.heroeForm.invalid) return;

        this.ajustarGramatica();

        if (this.modePage.clave === this.PAGEMODES[2]['clave']) {
            this._heroesService.insertarHeroe(this.heroeActual).subscribe({
                next: (heroeInsertado: Heroe) => {
                    this.heroe = heroeInsertado;
                    this._router.navigate([this.URLS.listado]);
                    this._snackBar.open('Héroe insertado correctamente', 'Cerrar');
                },
                error: () => {
                    this._snackBar.open('Se ha producido un error al insertar el héroe', 'Cerrar');
                }
            });
        } else {
            this._heroesService.modificarHeroe(this.heroeActual).subscribe({
                next: (heroeModificado: Heroe) => {
                    this.heroe = heroeModificado;
                    this._router.navigate([this.URLS.listado]);
                    this._snackBar.open('Héroe modificado correctamente', 'Cerrar');
                },
                error: () => {
                    this._snackBar.open('Se ha producido un error al modificar el héroe', 'Cerrar');
                }
            });
        }
    }

    /* Revisa el número máximo de poderes introducidos en el héroe para poder bloquear el campo y cambiar el placeholder */
    checkMaxChips(): boolean {
        return this.heroe.poderes.length === 3;
    }

    /* Resetea los valores del formulario */
    resetForm() {
        this.heroeForm.reset();
        this.heroe.poderes = [];
    }

    /* Inicializa el formulario */
    private _initForm() {
        this.heroeForm = this._formBuilder.group({
            id: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.id],
            nombre: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.nombre, Validators.required],
            alias: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.alias.toUpperCase(), Validators.required],
            historia: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.historia, Validators.required],
            poderes: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.poderes, Validators.required],
            imagen: [this.modePage.clave === this.PAGEMODES[2]['clave'] ? '' : this.heroe.imagen, Validators.required]
        });
    }

    /* En función del modo que nos llega al navegar, renderizamos el template correspondiente */
    private _selectTemplateRef(mode: number): TemplateRef<any> {
        if (mode === this.PAGEMODES[0]['clave']) {
            return this.readOnlyTemplate;
        } else if (mode === this.PAGEMODES[1]['clave'] || mode === this.PAGEMODES[2]['clave']) {
            return this.edicionTemplate;
        } else {
            return this.selectedTemplate;
        }
    }

    /* Corregimos la gramatica de los inputs antes de guardarlos */
    private ajustarGramatica() {
        if (this.heroeActual) {
            this.heroeActual.id = this.heroeActual.alias.toLowerCase().replace(/\s/g, '-');
            this.heroeActual.nombre = this.heroeActual.nombre.charAt(0).toUpperCase() + this.heroeActual.nombre.slice(1).toLowerCase();
            this.heroeActual.alias = this.heroeActual.alias.charAt(0).toUpperCase() + this.heroeActual.alias.slice(1).toLowerCase();
        }
    }
}
