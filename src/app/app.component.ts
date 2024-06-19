import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boiler-plate App';
  showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
