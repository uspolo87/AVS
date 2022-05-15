import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  getAttendance() {
    return this.firestore.collection('dashboard').doc('attendance').get();
  }

  getClasses() {
    return this.firestore.collection('dashboard').doc('classes').get();
  }
}
