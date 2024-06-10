import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from "./dropdown.component";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent],
  providers: []
})

export class ComponentsModule {};