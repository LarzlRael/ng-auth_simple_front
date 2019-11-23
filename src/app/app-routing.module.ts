import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './componets/tasks/tasks.component';
import { PrivateTasksComponent } from './componets/private-tasks/private-tasks.component';
import { SingupComponent } from './componets/singup/singup.component';
import { SinginComponent } from './componets/singin/singin.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'signin', component: SinginComponent },
  // ruta protegida
  { path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
