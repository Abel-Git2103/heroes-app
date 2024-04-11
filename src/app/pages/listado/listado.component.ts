import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/models/constants.model';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    /* Propiedades del listado */
    public numberCols: number = 6;

    /* Propiedades constantes */
    public MEDIABREAKPOINTS = Object.freeze(Constants.mediaBreakpoints);

    ngOnInit(): void {
        this.checkNumberCols();
    }

    /* Recupera el tamaño de la ventana para poder asignar el número de columnas que se muestran en pantalla para hacerla responsive */
    checkNumberCols() {
        let windowSize: number = window.innerWidth;

        if (windowSize < this.MEDIABREAKPOINTS.sm) {
            this.numberCols = 1;
        } else if (windowSize < this.MEDIABREAKPOINTS.md) {
            this.numberCols = 2;
        } else if (windowSize < this.MEDIABREAKPOINTS.lg) {
            this.numberCols = 3;
        } else if (windowSize < this.MEDIABREAKPOINTS.xl) {
            this.numberCols = 4;
        } else {
            this.numberCols = 6;
        }
    }
}
