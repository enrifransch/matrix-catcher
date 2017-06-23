import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetsComponent } from './targets.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TargetsComponent, TargetDetailComponent],
  exports: [
    TargetsComponent,
    TargetDetailComponent
  ]
})
export class TargetsModule { }
