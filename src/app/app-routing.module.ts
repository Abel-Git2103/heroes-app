import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursoInexistenteComponent } from './pages/recurso-inexistente/recurso-inexistente.component';

const routes: Routes = [
    {
        path: 'app',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
    },
    {
        path: 'recurso-inexistente',
        component: RecursoInexistenteComponent
    },
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'recurso-inexistente'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
