import { Component, OnInit } from '@angular/core';
import { ToastService } from '@shared/components/toasts/toast/service/toast.service';

@Component({
    selector: 'info-bar',
    templateUrl: './info-bar.component.html',
    styleUrls: ['./info-bar.component.scss'],
})
export class InfoBarComponent {
    public socialIcons: { url: string; label: string; type?: string }[];
    private count = 1;

    constructor(private toastService: ToastService) {
        this.socialIcons = [
            {
                url: 'bg-gitIcon',
                label: 'https://github.com/brandoncvdev',
            },
            { url: 'bg-telegramIcon', label: '2212796918', type: 'func' },
            // { url: '/assets/icons/facebook-messenger-brands.svg', label: '' },
            {
                url: 'bg-linkedinIcon',
                label: 'https://linkedin.com/in/brandon-castillo777',
            },
        ];
    }

    showToast(text: string) {
        this.toastService.show({
            text: `${text}`,
            type: 'success',
        });

        this.count += 1;
    }

    alertTextCopied(text: string): void {
        navigator.clipboard.writeText(text);
        this.showToast(`Numero copiado`);
    }
}
