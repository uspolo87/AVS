import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalnderComponent } from './calnder/calnder.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'module', component: ClassesComponent },
  { path: 'calendar', component: CalnderComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
