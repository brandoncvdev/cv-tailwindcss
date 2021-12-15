import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinnerLoadingService {
    private _loading: BehaviorSubject<boolean>;
    public readonly loading$: Observable<boolean>;

    constructor() {
        this._loading = new BehaviorSubject<boolean>(false);
        this.loading$ = this._loading.asObservable();
    }

    public show() {
        this._loading.next(true);
    }

    public hide() {
        this._loading.next(false);
    }
}
