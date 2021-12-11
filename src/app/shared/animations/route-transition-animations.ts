import {
    style,
    trigger,
    transition,
    query,
    animateChild,
    group,
    animate,
} from '@angular/animations';

const resetRoute = [
    style({ position: 'relative' }),
    query(
        ':enter, :leave',
        [
            style({
                position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
                top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
                left: 0,
                width: '100%',
                opacity: 0,
            }),
        ],
        { optional: true }
    ),
];

// Fade Animation
trigger('routeFadeAnimation', [
    transition('* => *', [
        ...resetRoute,
        query(':enter', [style({ opacity: 0 })], {
            optional: true,
        }),
        group([
            query(
                ':leave',
                [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
                { optional: true }
            ),
        ]),
    ]),
]);
// export const routeTransitionAnimations = trigger('triggerName', [
//     transition('Three => Two, Two => One', [
//         style({ position: 'relative' }),
//         query(':enter, :leave', [
//             style({
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//             }),
//         ]),
//         query(':enter', [style({ left: '-100%', opacity: 0 })]),
//         query(':leave', animateChild()),
//         group([
//             query(':leave', [
//                 animate('1s ease-out', style({ left: '100%', opacity: 0 })),
//             ]),
//             query(':enter', [
//                 animate('1s ease-out', style({ left: '0%', opacity: 1 })),
//             ]),
//         ]),
//         query(':enter', animateChild()),
//     ]),
// ]);
