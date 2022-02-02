import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ForExample} from './ForExample';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IfExample } from './IfExample';
import { PipeExample } from './PipeExample';
import { ArrayExample } from './ArrayExample';
import{Validate} from './Validate';
import {CustomPipe} from './CustomPipe';
import { CustomDirective } from './CustomDirective';
import { MyOwnComponent } from './MyOwnComponent';
import { ProductExample } from './ProductExample';
import { Productimage } from './Productimage'
import{HttpClientModule} from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details.Components';
import { TaskDetailsComponent } from './Task-details.component';
import { FormExample } from './FormExample';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidation } from './FormValidation';
import { PostExampleComponent } from './post-example/post-example.component';
import { NewModule } from './NewModule';
import { Login } from './Login';
import { Registration } from './Registration';
import { PostCasestudyComponent } from './post-casestudy/post-casestudy.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';


@NgModule({
  declarations: [AppComponent,Productimage, ForExample,Registration,IfExample,Login,PipeExample,
    TaskDetailsComponent,FormValidation,FormExample,ArrayExample,Validate,CustomPipe,CustomDirective,
    ProductExample,MyOwnComponent,EmployeeDetailsComponent, PostExampleComponent, PostCasestudyComponent, 
    TaskListComponent,SearchStatusComponent, SetPriorityComponent,CreateTaskComponent, SetBookmarkComponent],

  imports: [BrowserModule,FormsModule,NewModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();