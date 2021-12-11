import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'info-bar',
    templateUrl: './info-bar.component.html',
    styleUrls: ['./info-bar.component.scss'],
})
export class InfoBarComponent implements OnInit {
    public socialIcons: string[];
    constructor() {
        this.socialIcons = [
            '/assets/icons/github-alt-brands.svg',
            '/assets/icons/telegram-brands.svg',
            '/assets/icons/facebook-messenger-brands.svg',
        ];
    }

    ngOnInit(): void {}
}
