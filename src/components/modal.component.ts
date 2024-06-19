import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('300ms ease-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('200ms ease-in', style({ opacity: 0 }))
          ]
        )
      ]
    ),
    trigger("modalContent", [
      // ...
      state(
        "open",
        style({
          opacity: 1,
          transform: "scale(1, 1)",
        })
      ),
      state(
        "close",
        style({
          opacity: 0,
          transform: "scale(0.95, 0.95)",
        })
      ), transition("open => closed", [animate("200ms ease-in")]),
      transition("closed => open", [animate("300ms ease-out")])
    ])
  ]
})
export class ModalComponent {
  @Input() showModal: boolean | undefined;
  @Output() toggleModal = new EventEmitter<boolean>();

  toggle() {
    this.toggleModal.emit();
  }
}

