import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Entry from 'src/app/models/Entry';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('listAnimation', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('100ms', [
          animate('300ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(10px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-2px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('100ms', [
          animate('300ms ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-2px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(10px)', offset: 1 }),
          ]))
        ]), {optional: true}),

      ])
    ])
  ], 
})
export class ListComponent implements OnInit {
  @Input() list: Entry[] = [];
  filter: string = 'all';
  isFilterActive: boolean = false;

  @Input() isFormActive: boolean = false;
  @Output() onBtnAddEvent = new EventEmitter();
  @Output() onArrowUpEvent = new EventEmitter();
  @Output() onArrowDownEvent = new EventEmitter();
  @Output() onBtnDeleteAllEvent = new EventEmitter();
  @Output() onBtnDeleteEntryEvent = new EventEmitter<Entry>();
    
  constructor(private apiService: ApiService) { }
  
  ngOnInit() { }

  onBtnAdd() {
    this.onBtnAddEvent.emit();
  }

  onArrowUp() {
    this.onArrowUpEvent.emit();
  }

  onArrowDown() {
    this.onArrowDownEvent.emit();
  }

  onBtnDelete() {
    this.onBtnDeleteAllEvent.emit();
  }

  onBtnDeleteEntry(entry: Entry) {
    this.onBtnDeleteEntryEvent.emit(entry);
  }

  toggleDoneEntry(updatedEntry: Entry) {
    this.apiService.PUT(updatedEntry, updatedEntry.id!);
  }

  onFilter(option: string) {
    this.filter = option;
  }
}
