import { Component, OnInit } from '@angular/core';
import { SpinnerLoadingService } from '@shared/services/spinner-loading/spinner-loading.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
    public loading$: Observable<boolean>;

    constructor(public loader: SpinnerLoadingService) {
        this.loading$ = this.loader.loading$;
    }

    ngOnInit(): void {}
}
