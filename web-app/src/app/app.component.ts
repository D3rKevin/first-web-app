import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  viewDate: Date = new Date();

  redirect(){
    window.location.href = "https://www.google.com";
  }

  logOut() {
    
  }
}

