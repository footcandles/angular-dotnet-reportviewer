import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { externalUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployee():Observable<any>  {
    return this.httpClient.get<any>(externalUrl.api+externalUrl.employeeEndpoint)
  }

}
