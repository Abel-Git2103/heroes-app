import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const SkipLoading = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private _loadingService: LoadingService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Check for a custom attribute
        // to avoid showing loading spinner
        if (request.context.get(SkipLoading)) {
            // Pass the request directly to the next handler
            return next.handle(request);
        }

        // Turn on the loading spinner
        this._loadingService.setLoading(true, request.url);

        return next.handle(request).pipe(
            finalize(() => {
                // Turn off the loading spinner
                setTimeout(() => {
                    this._loadingService.setLoading(false, request.url);
                }, 1000);
            })
        );
    }
}
