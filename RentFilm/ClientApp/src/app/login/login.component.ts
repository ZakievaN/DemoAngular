import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });
  }

  onLogin(customerData) {
      this.loginService.login(customerData);
  }

    ngOnInit() {
    }
}
