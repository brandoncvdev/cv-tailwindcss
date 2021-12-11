import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from './info-bar.component';

import { InfiniteTypingModule } from '@shared/components/infinite-typing/infinite-typing.module';

@NgModule({
    declarations: [InfoBarComponent],
    imports: [CommonModule, InfiniteTypingModule],
    exports: [InfoBarComponent],
})
export class InfoBarModule {}
