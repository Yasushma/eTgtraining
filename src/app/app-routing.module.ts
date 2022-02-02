import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidation } from './FormValidation';
import { FormExample } from './FormExample';
import { Registration } from './Registration';
import { Login } from './Login';

import { TaskDetailsComponent } from './Task-details.component';
import{ TaskListComponent} from './task-list/task-list.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
const routes: Routes = [

  {path:'',redirectTo:'Login',pathMatch:'full' },
  {path:'bookmark', component:SetBookmarkComponent},
  {path:'addtask',component:CreateTaskComponent},
  {path:'TemplateForm',component:FormExample},
  {path:'pri',component:SetPriorityComponent},
  {path:'ModelForm',component:FormValidation},
  {path: 'Registration',component:Registration},
  {path:'tasks', component:TaskListComponent},
  {path:'statuscheck',component: SearchStatusComponent},
  {path:'details/:taskId',component:TaskDetailsComponent},
  {path:'Login',component:Login}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }