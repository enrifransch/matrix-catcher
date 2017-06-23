import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './layouts/main-layout/navbar.component';
import { P404Component } from './layouts/p404/p404.component';
import { ScanModule } from './scan/scan.module';
import { TargetsModule } from './targets/targets.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScanModule,
    TargetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
