import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Entry from 'src/app/models/Entry';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  status: string = 'default';
  @Input() entry!: Entry;
  @Output() onBtnEditEvent = new EventEmitter<Entry>();
  @Output() onBtnDeleteEvent = new EventEmitter<Entry>();
  @Output() onToggleDoneEvent = new EventEmitter<Entry>();

  constructor() { }

  toggleDone() {
    if (this.status != 'disabled ') this.entry.done = !this.entry.done;
    this.onToggleDoneEvent.emit(this.entry);
  }

  toggleStatus() {
    this.status == 'default' ? this.status = 'active' : this.status = 'default';
  }

  onBtnDelete(e: Event) {
    e.stopPropagation();
    this.status == 'disabled';
    this.onBtnDeleteEvent.emit(this.entry);
    console.log('delete');
  }
}
