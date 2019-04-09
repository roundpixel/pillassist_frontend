import { Component, OnInit, Input } from '@angular/core';
import { Pill } from '../pill/pill.model';
@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  public pills: Array<Pill> = new Array<Pill>();
  @Input() public _date: Date;

  constructor() {}

  // update Date when it's clicked on in other component
  @Input()
  set date(date: Date) {
    this._date = date;
    this.loadPills();
  }

  ngOnInit() {
    this.loadPills();
  }

  public loadPills() {
    const dateClicked =
      this._date.getDate() +
      '-' +
      this._date.getMonth() +
      '-' +
      this._date.getFullYear();

    this.pills = [
      {
        name: 'prolopa',
        dose: '1',
        date: new Date(2019, 3, 9, 10, 33, 30, 0),
        time: '10:33',
        description: 'neem doosje 2',
        display: false
      },
      {
        name: 'azilect',
        dose: '1',
        date: new Date(2019, 3, 9, 10, 33, 30, 0),
        time: '10:33',
        description: 'neem doosje 2',
        display: false
      }
    ];

    this.pills.forEach(pill => {
      const pillDate =
        pill.date.getDate() +
        '-' +
        pill.date.getMonth() +
        '-' +
        pill.date.getFullYear();

      if (dateClicked === pillDate) {
        pill.display = true;
      }
    });
  }
}
