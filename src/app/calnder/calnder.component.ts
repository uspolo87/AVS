import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  setDate,
  setMinutes,
  setHours,
  startOfHour,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calnder',
  templateUrl: './calnder.component.html',
  styleUrls: ['./calnder.component.css'],
})
export class CalnderComponent implements OnInit {
  colors: any = {
    red: {
      primary: '#E4042C',
      secondary: '#E4042C',
    },
    blue: {
      primary: '#045ee4',
      secondary: '#045ee4',
    },
    green: {
      primary: '#02856c',
      secondary: '#02856c',
    },
  };

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: setHours(setMinutes(new Date(), 20), 15),
      end: setHours(setMinutes(new Date(), 40), 17),
      title: 'A long event that spans 2 months',

      color: this.colors.red,
    },

    {
      start: setHours(setMinutes(new Date(2022, 4, 11), 20), 1),
      end: setHours(setMinutes(new Date(2022, 4, 11), 30), 2),
      title: 'A long event that spans 2 months',
      color: this.colors.blue,
    },

    {
      start: setHours(setMinutes(new Date(2022, 4, 13), 0), 0),
      end: setHours(setMinutes(new Date(2022, 4, 13), 60), 2),
      title: 'A long event that spans 2 months',
      color: this.colors.green,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  view: CalendarView = CalendarView.Month;

  viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData:
    | {
        action: string;
        event: CalendarEvent;
      }
    | undefined;

  setView(view: CalendarView) {
    this.view = view;
  }
}
