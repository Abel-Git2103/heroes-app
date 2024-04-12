import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
    declarations: [DialogoConfirmacionComponent, LoadingIndicatorComponent],
    imports: [SharedModule],
    exports: [DialogoConfirmacionComponent, LoadingIndicatorComponent]
})
export class ComponentsModule {}
