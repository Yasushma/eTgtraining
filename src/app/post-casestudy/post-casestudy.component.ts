import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../post-example/Data-Service';
import { postData } from '../post-example/postdataObj';
import { DataService1 } from './Data-Service1';
import { postdataObj1 } from './postdataObj1';
@Component({
  selector: 'app-post-casestudy',
  templateUrl: './post-casestudy.component.html',
  styleUrls: ['./post-casestudy.component.css']
})

export class PostCasestudyComponent implements OnInit {
  data:string | undefined;
  postData:postdataObj1| undefined;
  public users:any=[];
  constructor(private dataService:DataService1)
  { }
  ngOnInit()  {
  }
  sendData(){
    this.postData=new postdataObj1();
    this.postData.taskid=70;
    this.postData.ownerId=25;
    this.postData.taskName="anglarname";
    this.postData.description="elsee";
    this.postData.status=" nott";
    this.postData.name="mustt";
    this.postData.creatorId=22;
    this.postData.notes="take";
    this.postData.priority=20;
    this.postData.isBookmarked=true;
    
    this.dataService.addPost(this.postData).subscribe(data=>{console.log(data)
    });

  }

}