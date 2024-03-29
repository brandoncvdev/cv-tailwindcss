import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { finalize, Observable } from 'rxjs';
import { SpinnerLoadingService } from '@shared/services/spinner-loading/spinner-loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
    constructor(private loader: SpinnerLoadingService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        this.loader.show();
        return next.handle(request).pipe(
            finalize(() => {
                setTimeout(() => {
                    this.loader.hide();
                }, 500);
            })
        );
    }
}
