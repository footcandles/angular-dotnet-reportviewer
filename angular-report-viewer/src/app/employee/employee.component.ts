import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})

export class EmployeeComponent{

  reportServer: string = '';
  reportUrl: string = '';
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
  public showReport:boolean=false;

  constructor(private employeeService:EmployeeService) { }

  public getEmployeeReport(){
    this.employeeService.getEmployee().subscribe(response=>{
      this.showReport=true;
      this.reportServer=response.reportServerUrl;
      this.reportUrl=response.reportEndpoint;
    });
  }
}
