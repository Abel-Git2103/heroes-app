import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const skipLoading = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private _loadingService: LoadingService = inject(LoadingService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* Si mando en el context de la petición el flag skipLoading, no lanzo el sppiner */
        if (request.context.get(skipLoading)) {
            return next.handle(request);
        }

        // Lanzo el sppiner service
        this._loadingService.setLoading(true, request.url);

        return next.handle(request).pipe(
            finalize(() => {
                // Finalizo el sppiner service
                setTimeout(() => {
                    this._loadingService.setLoading(false, request.url);
                }, 800);
            })
        );
    }
}
