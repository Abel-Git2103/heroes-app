import { Component, Input, OnInit } from '@angular/core';
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

    constructor(private _loadingService: LoadingService, private router: Router) {}

    ngOnInit() {
        this.listenToLoading();
    }

    /* Recupera el estado del sppiner */
    private listenToLoading() {
        if (this.detectRouteTransitions) {
            this.router.events
                .pipe(
                    tap((event) => {
                        if (event instanceof RouteConfigLoadStart) {
                            this._loadingService.setLoading(true, this.router.url);
                        } else if (event instanceof RouteConfigLoadEnd) {
                            this._loadingService.setLoading(false, this.router.url);
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
