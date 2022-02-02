
import {Pipe,PipeTransform,Component} from '@angular/core';
@Pipe({
    name:'sort'
})
export class CustomPipe implements PipeTransform{

transform(value:any[],args:string):any{
    if(args=='ascending'){
        return value.sort();
    }else if(args==='descending'){
        return value.sort().reverse();
    }
}
}