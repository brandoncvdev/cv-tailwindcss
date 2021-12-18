import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { fadeInAnimation } from '@shared/animations/route-animations';

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
})
export class FullLayoutComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.navigateByUrl('/sobre-mi');
    }

    prepareRoute(outlet: RouterOutlet) {
        // return (
        //     outlet &&
        //     outlet.activatedRouteData &&
        //     outlet.activatedRouteData['animationState']
        // );
        return outlet?.isActivated || '';
    }
}
