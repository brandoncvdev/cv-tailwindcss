import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'info-bar',
    templateUrl: './info-bar.component.html',
    styleUrls: ['./info-bar.component.scss'],
})
export class InfoBarComponent implements OnInit {
    public socialIcons: { url: string; label: string }[];
    constructor() {
        this.socialIcons = [
            {
                url: '/assets/icons/github-alt-brands.svg',
                label: 'https://github.com/brandoncvdev',
            },
            { url: '/assets/icons/telegram-brands.svg', label: '2212796918' },
            // { url: '/assets/icons/facebook-messenger-brands.svg', label: '' },
            {
                url: '/assets/icons/icons8-linkedin.svg',
                label: 'https://linkedin.com/in/brandon-castillo777',
            },
        ];
    }

    ngOnInit(): void {}
}
