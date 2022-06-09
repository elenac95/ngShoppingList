import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Entry from 'src/app/models/Entry';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(150, style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate(150, style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class FormComponent implements OnInit {
  status: string = 'active';

  selectedUnit: string = '';
  selectedCategory: string = '';
  model = new Entry('', '', '', 0, '');

  warning = {
    category: '',
    title: '',
    amount: '',
    unit: ''
  }

  isWarningActive: boolean = false;

  @Output() onBtnAddToListEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onUnitSelect(e: Event) {
    this.model.unit = (<HTMLParagraphElement>e.target)!.innerHTML;
    this.selectedUnit = this.model.unit;
    this.inputValidation();
    console.log(this.model.unit);
  }

  onCategorySelect(e: Event) {
    this.model.category = (<HTMLParagraphElement>e.target)!.innerHTML;
    this.selectedCategory = this.model.category;
    this.inputValidation();
    console.log(this.model.category);
  }

  onBtnAdd() {
    this.isWarningActive = true;
    this.inputValidation();
    if (
      this.model.category !== '' &&
      this.model.title !== '' &&
      this.model.amount !== 0 &&
      this.model.unit !== ''
    ) {
      this.onBtnAddToListEvent.emit(this.model);
      this.model = new Entry('', '', '', 0, '');
      this.selectedCategory = '';
      this.selectedUnit = '';
      this.isWarningActive = false;
    }
  }

  inputValidation() {
    if (this.isWarningActive == true) {
      this.model.category == '' ? this.warning.category = 'Please choose a category!' : this.warning.category = '';
      this.model.title == '' ? this.warning.title = 'Please enter a title!' : this.warning.title = '';
      this.model.amount == 0 ? this.warning.amount = 'Amount cannot be 0!' : this.warning.amount = '';
      this.model.unit == '' ? this.warning.unit = 'Please choose a unit!' : this.warning.unit = '';
    }
  }
}
