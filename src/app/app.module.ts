import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CalnderComponent } from './calnder/calnder.component';
import { ClassesComponent } from './classes/classes.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    CalnderComponent,
    ClassesComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
