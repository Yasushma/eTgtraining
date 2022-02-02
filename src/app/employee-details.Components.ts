import { Component,OnInit } from "@angular/core";

import { EmployeeServiceService } from "src/app/employee-service.service";

import { IEmployee } from "./employee";

@Component({

    selector:'app-employee-details',

    templateUrl:'./employee-details.component.html',

   // styleUrls:['./employee-details.component.css']

})

export class EmployeeDetailsComponent implements OnInit{

    public employees :IEmployee[] | undefined;

    constructor(private employeeService:EmployeeServiceService){}

        ngOnInit()
        

        {

    this.employeeService.getEmployees().subscribe(data=>this.employees=data);

        }

}