import {
    AfterViewInit,
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
export class HeaderComponent implements AfterViewInit {
    @ViewChildren('navComp') navBarComp!: QueryList<ElementRef>;
    @ViewChildren('pinItem') pingComp!: QueryList<ElementRef>;
    public config: NavConfig[];

    constructor(private renderer2: Renderer2) {
        this.config = NAVBARCONFIG;
    }

    ngAfterViewInit(): void {
        this.navBarStatus(0);
    }

    public navBarStatus(ind: number): void {
        this.navBarComp.forEach((element, index) => {
            const pingActive = this.pingComp.get(index) as ElementRef;
            if (index === ind) {
                this.addNavClassBold(element);
                this.removePingNav(pingActive);
            } else {
                this.addNavClassLightweigth(element);
                this.addPingNav(pingActive);
            }
        });
    }

    private addPingNav(element: ElementRef): void {
        this.renderer2.addClass(element.nativeElement, 'hidden');
    }

    private removePingNav(element: ElementRef): void {
        this.renderer2.removeClass(element.nativeElement, 'hidden');
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
