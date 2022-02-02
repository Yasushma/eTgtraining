import { Inject, Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class MyService{
    getName():string{
        return "yasushma";
    }
    getDate():string{
        return "show date";
    }
    getDetails():number{
        return 10;
    }
}