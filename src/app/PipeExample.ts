import { Component } from "@angular/core";
@Component({
    selector:"pipe-com",
    templateUrl:"./PipeExample.html"
})
export class PipeExample{
    name="Yasushma kota";
    day=new Date();
    arr=[1,2,3,4,5];
    price=500;
}