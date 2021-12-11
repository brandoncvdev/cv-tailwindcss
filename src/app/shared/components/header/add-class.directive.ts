import {
    Directive,
    Renderer2,
    ElementRef,
    Input,
    OnChanges,
} from '@angular/core';

@Directive({
    selector: '[colorNavBar]',
})
export class NavBarColorDirective implements OnChanges {
    @Input() colorNavBar!: boolean;

    constructor(
        private renderer2: Renderer2,
        private _elementRef: ElementRef
    ) {}

    ngOnChanges(): void {
        console.log(this.colorNavBar);

        if (this.colorNavBar) {
            this.renderer2.addClass(
                this._elementRef.nativeElement,
                'text-black'
            );
            this.renderer2.removeClass(
                this._elementRef.nativeElement,
                'text-gray-500'
            );
        } else {
            this.renderer2.addClass(
                this._elementRef.nativeElement,
                'text-gray-500'
            );
            this.renderer2.removeClass(
                this._elementRef.nativeElement,
                'text-black'
            );
        }
    }
}
