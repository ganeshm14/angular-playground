import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
