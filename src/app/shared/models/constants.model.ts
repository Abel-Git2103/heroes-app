export const Constants = {
    appUrls: {
        listado: '/app/listado',
        busqueda: '/app/busqueda',
        nuevoHeroe: '/app/nuevo-heroe',
        editarHeroe: '/app/editar-heroe/{id}',
        heroe: '/app/heroe/'
    },
    mediaBreakpoints: {
        sm: 540,
        md: 768,
        lg: 960,
        xl: 1140
    },
    pageHeroMode: [
        { clave: 0, valor: 'readOnly' },
        { clave: 1, valor: 'edicion' },
        { clave: 2, valor: 'alta' }
    ]
};

export interface ClaveValor {
    clave: number;
    valor: string;
}
