import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classData!: any;
  originialClassData: any;
  activeClassId!: string;

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.dbService.getClasses().subscribe((classesData) => {
      const data: any = classesData.data();

      this.originialClassData = data.classObj;
      this.activeClassId = 'C07221';

      this.classData = data.classObj.filter((obj: { id: string }) => {
        return obj.id == 'C07221';
      });
    });
  }

  showClasses(id: string) {
    this.activeClassId = id;

    this.classData = this.originialClassData.filter((obj: { id: string }) => {
      return obj.id == id;
    });
  }
}
