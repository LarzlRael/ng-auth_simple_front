import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// inmportanod el forms module
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './componets/singup/singup.component';
import { SinginComponent } from './componets/singin/singin.component';
import { TasksComponent } from './componets/tasks/tasks.component';
import { PrivateTasksComponent } from './componets/private-tasks/private-tasks.component';

// importando el el guard
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
// importando el http interceptor
@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    TasksComponent,
    PrivateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
