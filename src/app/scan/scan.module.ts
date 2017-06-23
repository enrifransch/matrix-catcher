import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanComponent } from './scan.component';
import { ScanResultsComponent } from './scan-results/scan-results.component';
import { BtsListComponent } from './bts-list/bts-list.component';
import { BtsCardComponent } from './bts-list/bts-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScanComponent, ScanResultsComponent, BtsListComponent, BtsCardComponent],
  exports: [
    ScanComponent, 
    ScanResultsComponent
  ]
})
export class ScanModule { }
