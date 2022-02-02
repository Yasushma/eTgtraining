import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = "http://localhost:8080/restalltask";
  private baseUrl1 = "http://localhost:8080/restaddtask";
  
  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  searchByStatus(status:string): Observable<any> {

    return this.httpClient.get(`http://localhost:8080/status/${status}`);
  
  }
  pri(task_ID:number,priority:string):Observable<Object>{
    return this.httpClient.get(`http://localhost:8080/assignpriority/${task_ID}/${priority}`);
  }
  
  
  validate(userName: string,password:string): Observable<any> { 
  
    return this.httpClient.get(`http://localhost:8080/user/${userName}/${password}`);
  
  }
  createTask(task:Object):Observable<Object>{
    return this.httpClient.post(this.baseUrl1,task);
  }

  book(taskId:number, isbookmarked:String):Observable<Object>{

    return this.httpClient.get(`http://localhost:8080/assignbookmark/${taskId}/${isbookmarked}`);
  
  }







  deleteTask(task_ID:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${task_ID}`,{responseType:'text'});
  }

  getTask(task_ID:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/restgettask/${task_ID}`);
  }

  updateTask(task_ID:number,value:any):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${task_ID}`, value);
  }

  setaskid(task_ID:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tak/${task_ID}`);
  }

  seepriority(priority:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/pri/${priority}`);
  }

  sename(name:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/nam/${name}`)
  }

assign(task_ID:number,owner_ID:number):Observable<Object>{
  return this.httpClient.get(`${this.baseUrl}/${task_ID}/ow/${owner_ID}`);
}


  


}