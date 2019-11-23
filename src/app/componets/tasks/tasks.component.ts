import { Component, OnInit } from '@angular/core';
import { TasksServicesService } from 'src/app/services/tasks-services.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TasksServicesService) {

  }

  ngOnInit() {
    this.getAllTasks();
  }

  tasks: any = [];
  getAllTasks() {
    this.taskService.getTasks().subscribe(
      res => {
        this.tasks = res,
          console.log(this.tasks)
      },
      err => console.log(err)
    )
  }

}
