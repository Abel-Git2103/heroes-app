import { Component, Input, OnInit, inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {
    @Input() detectRouteTransitions = false;

    public loading: boolean = false;

    /* Inyección de dependencias */
    private _loadingService: LoadingService = inject(LoadingService);
    private _router: Router = inject(Router);

    ngOnInit() {
        this._listenToLoading();
    }

    /* Recupera el estado del sppiner */
    private _listenToLoading() {
        if (this.detectRouteTransitions) {
            this._router.events
                .pipe(
                    tap((event) => {
                        if (event instanceof RouteConfigLoadStart) {
                            this._loadingService.setLoading(true, this._router.url);
                        } else if (event instanceof RouteConfigLoadEnd) {
                            this._loadingService.setLoading(false, this._router.url);
                        }
                    })
                )
                .subscribe();
        }

        this._loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
            this.loading = loading;
        });
    }
}
