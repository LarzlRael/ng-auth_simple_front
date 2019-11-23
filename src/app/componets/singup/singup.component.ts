import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(
    private signupService: AuthService,
    private router: Router
    ) { }

  user = {

  }
  ngOnInit() {
  }


  registerUser() {
    this.signupService.singUp(this.user)
      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res.token),
            this.router.navigate(['/private'])

        },
        err => console.log(err)
      )
  }
}
