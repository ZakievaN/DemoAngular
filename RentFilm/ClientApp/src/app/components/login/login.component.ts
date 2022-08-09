import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginUser } from '../../models/loginUser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    name: string;
    password: string;

  constructor(
    private loginService: LoginService,
  ) {
    
    
  }

   onSubmit() {
      var user = new LoginUser(this.name, this.password);
      this.loginService.login(user);
      console.log(this.name + ' ' + this.password);
  }

    ngOnInit() {
    }
}
