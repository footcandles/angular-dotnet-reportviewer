import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-report-viewer';
  reportServer: string='';
  reportUrl: string='';
  showParameters: string = "true";
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
}
