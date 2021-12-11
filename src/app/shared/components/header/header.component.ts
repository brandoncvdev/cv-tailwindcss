import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    Renderer2,
    ViewChildren,
} from '@angular/core';
import { NAVBARCONFIG } from '@shared/constants/nav-bar-config';
import { NavConfig } from '@shared/models/navbar-config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChildren('navComp') navBarComp!: QueryList<ElementRef>;
    public config: NavConfig[];

    constructor(private renderer2: Renderer2) {
        this.config = NAVBARCONFIG;
    }

    ngOnInit(): void {}

    public navBarStatus(ind: number): void {
        this.navBarComp.forEach((element, index) => {
            if (index === ind) {
                this.addNavClassBold(element);
            } else {
                this.addNavClassLightweigth(element);
            }
        });
    }

    private addNavClassBold(element: ElementRef): void {
        this.renderer2.addClass(element.nativeElement, 'text-black');
        this.renderer2.removeClass(element.nativeElement, 'text-gray-500');
    }

    private addNavClassLightweigth(element: ElementRef): void {
        this.renderer2.addClass(element.nativeElement, 'text-gray-500');
        this.renderer2.removeClass(element.nativeElement, 'text-black');
    }
}
