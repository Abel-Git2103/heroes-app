import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    /* Propiedades del toolbar */
    showToolbarButtons: boolean = true;
    lastElementActive: string = '';
    toggleFlag: boolean = false;
    showCollapsedToolbar: boolean = false;

    ngOnInit(): void {
        this.checkSize();

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
                btnListado?.classList.toggle('active');
                btnBuscar?.classList.remove('active');
                btnNuevo?.classList.remove('active');
                toggleButton?.classList.remove('active');

                this.lastElementActive = elementoSeleccionado;
                this.showCollapsedToolbar = false;
                break;
            case 'btnBuscar':
                btnListado?.classList.remove('active');
                btnBuscar?.classList.toggle('active');
                btnNuevo?.classList.remove('active');
                toggleButton?.classList.remove('active');

                this.lastElementActive = elementoSeleccionado;
                this.showCollapsedToolbar = false;
                break;
            case 'btnNuevo':
                btnListado?.classList.remove('active');
                btnBuscar?.classList.remove('active');
                btnNuevo?.classList.toggle('active');
                toggleButton?.classList.remove('active');

                this.lastElementActive = elementoSeleccionado;
                this.showCollapsedToolbar = false;
                break;
            default:
                btnListado?.classList.remove('active');
                btnBuscar?.classList.remove('active');
                btnNuevo?.classList.remove('active');
                toggleButton?.classList.remove('active');
                break;
        }
    }

    /* PRIVATE METHODS */
    /* Verifica el tamaño de la pantalla para mostrar u ocultar los botones del toolbar y mostrar el toggle */
    private checkSize() {
        if (window.innerWidth > 680) {
            this.showCollapsedToolbar = false;
            this.showToolbarButtons = true;
        } else {
            this.showToolbarButtons = false;
        }
    }
}
