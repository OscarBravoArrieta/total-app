 import { Injectable } from '@angular/core'
 import { environment } from 'src/environments/environment'
 import { HttpClient, HttpHeaders } from '@angular/common/http'

 @Injectable({
     providedIn: 'root'
 })
 export class EmployeesService {

     constructor(
         private http: HttpClient
     ) { }

     getAll(filter: any) {
         return this.http.put(`${environment.serverUrl}/api/employees/`, filter)
     }
}
