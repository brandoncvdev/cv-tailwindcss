import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '@shared/animations/route-animations';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
})
export class ExperienceComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
