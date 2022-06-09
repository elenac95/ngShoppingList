import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.scss']
})
export class BtnPlusComponent implements OnInit {

   @Output() onBtnPlusEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnPlus() {
    this.onBtnPlusEvent.emit();
  }
}
