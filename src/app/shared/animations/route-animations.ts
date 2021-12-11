import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        // Animate the new page in
        query(':enter', [
            animate(
                '600ms ease',
                style({ opacity: 1, transform: 'scale(1) translateY(0)' })
            ),
        ]),
    ]),
]);

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 })),
        ]),
    ]);
