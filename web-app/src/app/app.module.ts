import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import { SocialsComponent } from './socials/socials.component';
import { MatDividerModule } from '@angular/material/divider';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SocialsComponent,
    MainComponent
  ],
  imports: [
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
