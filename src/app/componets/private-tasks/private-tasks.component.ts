import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksServicesService } from 'src/app/services/tasks-services.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  constructor(private tasks: TasksServicesService) { }


  ngOnInit() {
    this.getPrivateTasks();
  }
  privateTasks: any = [];
  getPrivateTasks() {
    this.tasks.getPrivateTasks().subscribe(
      res => {
        this.privateTasks = res,
          console.log(this.privateTasks)
      },
      err => console.log(err)
    )
  }


}
