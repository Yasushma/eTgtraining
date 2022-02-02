import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TaskService } from '../TaskService';
import { Task } from '../Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  //initializinf task and hidden submit button
  task: Task= new Task();
  submitted=false;
  taskService: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this.taskService.createTask(this.task).subscribe(
      (      data: any)=>console.log(data),(error: any)=>console.log(error));
    this.task=new Task();
    this.router.navigate(['/tasks']);

  }

}