import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss']
})
export class DateDisplayComponent implements OnInit {
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

	getDay = () : string => {
		let day = this.currentDate.getDate();

		if (day < 9) {
			let dayString = `0${day.toString()}`;
			return dayString;
		}

		return day.toString();
	}

	getMonthYearName = () : string => {
		let monthIndex = this.currentDate.getMonth();
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		let year = this.currentDate.getFullYear().toString();
		return `${monthNames[monthIndex]}, ${year}`;
	}

	getWeekday = () : string => {
		let weekdayIndex = this.currentDate.getDay();      
		const weekdayNames = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];

		return weekdayNames[weekdayIndex];
	}
}
