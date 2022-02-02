import { Inject, Injectable } from "@angular/core";

import { HttpClient,HttpErrorResponse } from "@angular/common/http";

import { IEmployee } from "./employee";

import { Observable } from "rxjs";

import { share } from "rxjs/operators"


//import{course} from "./course";

@Injectable({

    providedIn:'root'

})

export class EmployeeServiceService{
    baseUrl:string = "https://jsonplaceholder.typicode.com/users";
    private url:string="/assets/data/employees.json";
   
constructor (private http:HttpClient)

{

}

getEmployees(): Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this.url);
}

}