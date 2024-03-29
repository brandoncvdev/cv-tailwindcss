import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavBarColorDirective } from './add-class.directive';

@NgModule({
    declarations: [HeaderComponent, NavBarColorDirective],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
