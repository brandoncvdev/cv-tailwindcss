import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import {
    ToastData,
    TOAST_CONFIG_TOKEN,
    ToastConfig,
} from './config/toast-config';
import { ToastRef } from './config/toast-ref';
import { toastAnimations, ToastAnimationState } from './config/toast-animation';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['toast.component.scss'],
    animations: [toastAnimations.fadeToast],
})
export class ToastComponent implements OnInit, OnDestroy {
    animationState: ToastAnimationState = 'default';
    iconType: string;

    private intervalId!: number;

    constructor(
        readonly data: ToastData,
        readonly ref: ToastRef,
        @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastConfig
    ) {
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }

    ngOnInit() {
        this.intervalId = setTimeout(
            () => (this.animationState = 'closing'),
            5000
        ) as any;
    }

    ngOnDestroy() {
        clearTimeout(this.intervalId);
    }

    close() {
        this.ref.close();
    }

    onFadeFinished(event: AnimationEvent) {
        const { toState } = event;
        const isFadeOut = (toState as ToastAnimationState) === 'closing';
        const itFinished = this.animationState === 'closing';

        if (isFadeOut && itFinished) {
            this.close();
        }
    }
}
