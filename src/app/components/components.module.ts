import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DialogoConfirmacionComponent, LoadingIndicatorComponent, HeroCardComponent],
    imports: [SharedModule, RouterModule],
    exports: [DialogoConfirmacionComponent, LoadingIndicatorComponent, HeroCardComponent]
})
export class ComponentsModule {}
