 import { Injectable } from '@angular/core'
 import { environment } from 'src/environments/environment'
 import { HttpClient, HttpHeaders } from '@angular/common/http'

 @Injectable({
     providedIn: 'root'
 })
 export class BeneficiarieService {

     constructor(
         private http: HttpClient
     ) { }
     getAll(filter: any): any {
         return this.http.put(`${environment.serverUrl}/api/beneficiaries/`, filter)
     }
}
