import {

  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group

} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);

  export const dropdownAnimation = trigger('dropdownAnimation', [
    state('hidden', style({
      height: '0',
      overflow: 'hidden',
      opacity: 0,
    })),
    state('visible', style({
      height: '*',
      overflow: 'visible',
      opacity: 1,
    })),
    transition('hidden => visible', [
      animate('500ms ease-out'),
    ]),
    transition('visible => hidden', [
      animate('300ms ease-in'),
    ]),
  ]);

  export const rotateAnimation = trigger('rotateAnimation', [
    state('true', style({
      transform: 'rotate(-90deg)'
    })),
    state('false', style({
      transform: 'rotate(0deg)'
    })),
    transition('true <=> false', [
      animate('500ms ease-out'),
    ]),
    transition('false <=> true', [
      animate('300ms ease-in'),
    ]),
  ]);


  export const animateEnter=
    trigger('routeSlide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])

