import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  private uri_tasks = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.uri_tasks}tasks`);
  }
  getPrivateTasks() {
    return this.http.get(`${this.uri_tasks}private-tasks`);
  }
}
