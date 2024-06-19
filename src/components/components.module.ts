import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from "./dropdown.component";
import { ModalComponent } from "./modal.component";


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [DropdownComponent, ModalComponent],
  declarations: [DropdownComponent, ModalComponent],
  providers: []
})

export class ComponentsModule {};