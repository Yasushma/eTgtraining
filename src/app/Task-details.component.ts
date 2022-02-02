import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './TaskService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './Task-details.component.html'
  
})
export class TaskDetailsComponent implements OnInit {
  
   task !:Task;
  taskId: any;

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
    this.task=new Task();
    this.taskId = this.route.snapshot.params['taskId'];
    this.troService.getTask(this.taskId) .subscribe(data=>{
      console.log(data);
      this.task=data;      
    },error=>console.log(error));
    
  
  }
  list(){
    this.router.navigate(['/restalltask'])
  }

}