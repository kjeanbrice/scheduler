import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cssLoadingLogin = 'dimmer';
  username: string = null;
  validUsername = false;
  errorMessage = '';

  password: string = null;
  validPassword = false;

  constructor(private authservice: AuthService, private router: Router) {

  }

  async ngOnInit() {
    await this.isAuthenticated();
    this.initializeComponents();
  }


  onUpdate(event, fieldName) {
    if (event === null || fieldName === null) {
      return;
    }

    switch (fieldName) {
      case 'username':
        const currentUsername = event.target.value;
        if (currentUsername === null || currentUsername.trim().length === 0) {
          this.username = '';
          this.validUsername = false;
        } else {
          this.username = currentUsername.trim();
          this.validUsername = true;
        }
        break;
      case 'password':
        const currentPassword = event.target.value;
        if (currentPassword === null || currentPassword.trim().length === 0) {
          this.password = '';
          this.validPassword = false;
        } else {
          this.password = currentPassword.trim();
          this.validPassword = true;
        }
        break;
      default:
        console.log('Error Switch(Login):  ');
        break;
    }

    if (this.validPassword && this.validUsername) {
      this.changeLoginButtonStatus(true);
    }
  }

  changeLoginButtonStatus(status: boolean): void {
    if (!status) {
      document.getElementById('btn-login').setAttribute('disabled', '');
    } else {
      document.getElementById('btn-login').removeAttribute('disabled');
    }
  }

  onLogin(): void {
    this.cssLoadingLogin = 'dimmer active';
    if (!this.validPassword || !this.validUsername) {
      this.cssLoadingLogin = 'dimmer';
      return;
    }


    this.authservice.login(this.password, this.username).subscribe(
      (data) => {
        this.cssLoadingLogin = 'dimmer';
        document.getElementById('lbl-error').style.display = 'none';
        //redirect
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        //show error message
        this.cssLoadingLogin = 'dimmer';
        this.errorMessage = 'The username and/or password is incorrect. Please try again.';
        document.getElementById('lbl-error').style.display = 'block';
      }
    );
  }

  initializeComponents(): void {
    this.validPassword = false;
    this.validUsername = false;
    document.getElementById('btn-login').setAttribute('disabled', '');
    document.getElementById('lbl-error').style.display = 'none';
  }

  async isAuthenticated() {
    const res = await (this.authservice.isAuth().toPromise());
    console.log('IsAuthenticated: ' + res);
    if (res === true) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
