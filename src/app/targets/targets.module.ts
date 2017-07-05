import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetsComponent } from './targets.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';
import { ModalModule, DatepickerModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    DatepickerModule
  ],
  declarations: [TargetsComponent, TargetDetailComponent],
  exports: [
    TargetsComponent,
    TargetDetailComponent
  ]
})
export class TargetsModule { }
