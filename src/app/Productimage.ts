import { Component, OnInit } from "@angular/core";

@Component({

    selector:"products-com",

    templateUrl:"./Productimage.html",
    styleUrls: ['./app.component.css']   
})
export class Productimage implements OnInit{
imagepath: string;
constructor(){
    this.imagepath='/assets/download.jfif';
}
    ngOnInit(){
        
    }
    pname="mobile";
    price=500;

}
