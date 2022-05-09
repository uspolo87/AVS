import { Component, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
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
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: addHours(new Date(), 2),
      end: addHours(new Date(), 2),
      title: 'An event with no end date',
      color: this.colors.yellow,
    },
    {
      start: addHours(new Date(), 1),
      end: addHours(new Date(), 1),
      title: 'A long event that spans 2 months',
      color: this.colors.blue,
    },
    {
      start: addHours(new Date(), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: this.colors.yellow,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  view: CalendarView = CalendarView.Month;

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
