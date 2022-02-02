import { Component, OnInit } from '@angular/core';

import { TaskService } from '../TaskService';

import { ActivatedRoute, Router } from '@angular/router';

@Component({

  selector: 'app-search-status',

  templateUrl: './search-status.component.html',

  styleUrls: ['./search-status.component.css']

})

export class SearchStatusComponent implements OnInit {

  tasks:any;

  task_ID!:number;

  status !: string;


  constructor(private route:ActivatedRoute,

    private router:Router, private troService:TaskService) { }
    ngOnInit() {

   

     

    }
  
  
  
    /*setaskid(){
  
      this.troService.setaskid(this.task_ID).subscribe(data=>{this.tasks=data;
  
        console.log(data);
  
      },
  
      err=>
  
      {
  
        console.log(err);
  
      });
  
    }*/
  

  
    statuscheck(){
  
  
      this.troService.searchByStatus(this.status).subscribe(
  
  
  
        data => {
  
  
  
          this.tasks = data;
  
  
  
          console.log(this.tasks);
  
  
  
        },
  
  
  
        error => {
  
  
  
          console.log(error);
  
  
  
        });
  
  
  
      }
  
  }