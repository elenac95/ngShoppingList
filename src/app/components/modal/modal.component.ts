import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class ModalComponent {
  @Input() active: boolean = false;
  @Output() onBtnCancelEvent = new EventEmitter();
  @Output() onBtnOkEvent = new EventEmitter();

  constructor() { }

  onBtnCancel() {
    this.onBtnCancelEvent.emit();
  }

  onBtnOk() {
    this.onBtnOkEvent.emit();
  }
}
