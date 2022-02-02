import { Component } from '@angular/core';

@Component({
 selector: 'array-com',
 templateUrl: './ArrayExample.html',
 styleUrls: ['./app.component.css']
})
export class ArrayExample {
    products = [
        {"id":1,"name":"yasushma","description":"Incidunt et magni","price":"170.00","quantity":56840},
        {"id":2,"name":"harisha ","description":"Sint libero mollitia","price":"302.00","quantity":9358},
        {"id":3,"name":"Namrta","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
        {"id":4,"name":"junisha","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
    ];
}
