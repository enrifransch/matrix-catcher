import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: 'matrix-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {

  fade : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.fade = true;
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

  quetal() {
    this.fade = false;
  }

}
