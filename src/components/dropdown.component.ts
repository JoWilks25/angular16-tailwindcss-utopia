import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const dummyOptions = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' },
  { id: 3, text: 'Option 3' },
  { id: 4, text: 'Option 4' },
]

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          opacity: 1,
          transform: "scale(1, 1)",
        })
      ),
      state(
        "closed",
        style({
          opacity: 0,
          transform: "scale(0.95, 0.95)",
        })
      ),
      transition("open => closed", [animate("75ms ease-in")]),
      transition("closed => open", [animate("100ms ease-out")])
    ])
  ]
})
export class DropdownComponent {
  options: any[] = dummyOptions;
  selectedObject: any;
  showMenu: boolean = false;

  toggleMenuVisibility() {
    this.showMenu = !this.showMenu;
  }

  onSelect(option: any) {
    this.selectedObject = option;
    this.showMenu = false;
  }
}

