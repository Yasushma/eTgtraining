import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; 
import { TaskService } from '../TaskService';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task!:Observable<Task[]>
  taskid !:number;

  constructor(private troService:TaskService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    
    this.task=this.troService.getTaskList();
    
  }

  
  taskDetails(taskid:number){
    this.router.navigate(['details',this.taskid]);
  } 

  updateTask(taskid:number){
    this.router.navigate(['update',taskid]);
  }

}