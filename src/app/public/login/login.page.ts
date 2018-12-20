import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { RegisterPage } from '../register/register.page';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService,public navCtrl: NavController) { }
 
  ngOnInit() {
  }
 
  login() {
    this.authService.login();
  }
  register(){
    this.navCtrl.navigateRoot(['/register']);
  }
}
