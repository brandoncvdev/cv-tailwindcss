import { NgModule, ModuleWithProviders } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { ToastComponent } from './toast.component';
import {
    defaultToastConfig,
    TOAST_CONFIG_TOKEN,
    ToastConfig,
} from './config/toast-config';

@NgModule({
    imports: [OverlayModule],
    declarations: [ToastComponent],
    entryComponents: [ToastComponent],
})
export class ToastModule {
    public static forRoot(
        config = defaultToastConfig
    ): ModuleWithProviders<ToastConfig> {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: { ...defaultToastConfig, ...config },
                },
            ],
        };
    }
}
