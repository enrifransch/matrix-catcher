import { ScanService } from '../services/scan.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'matrix-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  scans: Observable<any>;
  constructor(private scanService: ScanService) { }

  ngOnInit() {
    this.scans = this.scanService.getScans();
  }

}
