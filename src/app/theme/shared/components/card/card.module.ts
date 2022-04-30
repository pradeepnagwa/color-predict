import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
/*import {AnimationService, AnimatorModule} from 'css-animator';*/

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    RouterModule
    /*AnimatorModule*/
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [/*AnimationService*/]
})
export class CardModule { }
