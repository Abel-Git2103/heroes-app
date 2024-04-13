import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/models/constants.model';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
    /* Propiedades del toolbar */
    showToolbarButtons: boolean = true;
    lastElementActive: string = '';
    toggleFlag: boolean = false;
    showCollapsedToolbar: boolean = false;

    /* Propiedades constantes */
    public URLS = Object.freeze(Constants.appUrls);

    /* Inyección de dependencias */
    private _router: Router = inject(Router);

    ngOnInit(): void {
        this._checkUrl(this._router);
        this._checkSize();

        /* Evento que escucha cuando cambiamos el tamaño de la pantalla para mostrar u ocultar el toggle colapsando el toolbar */
        window.addEventListener('resize', () => {
            if (window.innerWidth > 680) {
                this.showCollapsedToolbar = false;
                this.showToolbarButtons = true;

                if (this.lastElementActive !== '' && this.toggleFlag === true) {
                    setTimeout(() => {
                        this.switchActiveClass(this.lastElementActive);
                    }, 50);
                    this.toggleFlag = false;
                }
            } else {
                this.showToolbarButtons = false;
                this.toggleFlag = true;
            }
        });
    }

    ngAfterViewInit(): void {
        if (this.lastElementActive !== '') {
            this.switchActiveClass(this.lastElementActive);
        }
    }

    /* PUBLIC METHODS */
    /* Permite activar o desactivar el toggle button y mostrar los botones colapsados en forma de lista */
    switchToggleButton() {
        let toggleButton: Element | null = document.querySelector('.toggleButton');

        toggleButton?.classList.toggle('active');

        this.showCollapsedToolbar = this.showCollapsedToolbar === true ? false : true;
    }

    /* Cuando clico en cualquiera de los botones del toolbar activo el seleccionado y desactivo los otros */
    switchActiveClass(elementoSeleccionado?: string) {
        /* Obtengo los elementos */
        let btnListado: Element | null = document.querySelector('.btnListado');
        let btnBuscar: Element | null = document.querySelector('.btnBuscar');
        let btnNuevo: Element | null = document.querySelector('.btnNuevo');
        let toggleButton: Element | null = document.querySelector('.toggleButton');

        switch (elementoSeleccionado) {
            case 'btnListado':
                if (!btnListado?.classList.contains('active')) {
                    btnListado?.classList.toggle('active');
                    btnBuscar?.classList.remove('active');
                    btnNuevo?.classList.remove('active');
                    toggleButton?.classList.remove('active');

                    this.lastElementActive = elementoSeleccionado;
                    this.showCollapsedToolbar = false;
                }
                break;
            case 'btnBuscar':
                if (!btnBuscar?.classList.contains('active')) {
                    btnListado?.classList.remove('active');
                    btnBuscar?.classList.toggle('active');
                    btnNuevo?.classList.remove('active');
                    toggleButton?.classList.remove('active');

                    this.lastElementActive = elementoSeleccionado;
                    this.showCollapsedToolbar = false;
                }
                break;
            case 'btnNuevo':
                if (!btnBuscar?.classList.contains('active')) {
                    btnListado?.classList.remove('active');
                    btnBuscar?.classList.remove('active');
                    btnNuevo?.classList.toggle('active');
                    toggleButton?.classList.remove('active');

                    this.lastElementActive = elementoSeleccionado;
                    this.showCollapsedToolbar = false;
                }
                break;
            default:
                btnListado?.classList.remove('active');
                btnBuscar?.classList.remove('active');
                btnNuevo?.classList.remove('active');
                toggleButton?.classList.remove('active');

                this.lastElementActive = '';
                this.showCollapsedToolbar = false;
                break;
        }
    }

    /* PRIVATE METHODS */
    /* Verifica el tamaño de la pantalla para mostrar u ocultar los botones del toolbar y mostrar el toggle */
    private _checkSize() {
        if (window.innerWidth > 680) {
            this.showCollapsedToolbar = false;
            this.showToolbarButtons = true;
        } else {
            this.showToolbarButtons = false;
        }
    }

    /* Verifica el path actual de la url, por si refresco la página en la que me encuentre no pierda el boton seleccionado del topbar */
    private _checkUrl(router: Router) {
        let path: string = router.url || '';

        switch (path) {
            case this.URLS['listado']:
                this.lastElementActive = 'btnListado';
                break;
            case this.URLS['busqueda']:
                this.lastElementActive = 'btnBuscar';
                break;
            case this.URLS['nuevoHeroe']:
                this.lastElementActive = 'btnNuevo';
                break;
            default:
                this.lastElementActive = '';
                break;
        }
    }
}
