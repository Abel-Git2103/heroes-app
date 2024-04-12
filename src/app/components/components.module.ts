import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';

@NgModule({
    declarations: [DialogoConfirmacionComponent],
    imports: [SharedModule]
})
export class ComponentsModule {}
