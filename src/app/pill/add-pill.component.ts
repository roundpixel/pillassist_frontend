import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html'
})
export class AddPillComponent implements OnInit {
  public recurrences = [];
  public selectedDayRecurrences: string[] = [];
  public timeOfDays = [];
  public timeOfDayNumber = 1;

  public isActive = null;
  public isEveryDay = true;
  public isEveryWeek: boolean;
  public isEveryMonth: boolean;

  @Output() onHide = new EventEmitter<boolean>();
  setHide() {
    this.onHide.emit(true);
  }

  constructor() {}

  ngOnInit() {
    this.recurrences = [
      { label: 'Elke dag', value: 'everyDay' },
      { label: 'Elke week', value: 'everyWeek' },
      { label: 'Elke maand', value: 'everyMonth' }
    ];
  }

  public addTimeInput() {
    this.timeOfDayNumber++;
    this.timeOfDays.push('' + this.timeOfDayNumber);
  }

  public deleteTimeInput(e) {
    this.timeOfDayNumber--;

    const inputGroup = e.target.parentNode.parentNode;
    const numberToRemove = inputGroup.classList[1];

    for (let i = 0; i < this.timeOfDays.length; i++) {
      if (this.timeOfDays[i] === numberToRemove) {
        this.timeOfDays.splice(i, 1);
      }
    }
    inputGroup.remove();
  }

  public setRecurrence(event) {
    switch (event.value) {
      case 'everyDay':
        this.isEveryDay = true;
        this.isEveryWeek = false;
        this.isEveryMonth = false;
        break;
      case 'everyWeek':
        this.isEveryWeek = true;
        this.isEveryDay = false;
        this.isEveryMonth = false;
        break;
      case 'everyMonth':
        this.isEveryMonth = true;
        this.isEveryWeek = false;
        this.isEveryDay = false;
        break;
    }
  }

  public hide() {
    this.setHide();
  }
}
