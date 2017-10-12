import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUp } from "../signup/signup";
import { ForgotPassword } from "../forgotpassword/forgotpassword";
import { HomeScreen } from "../homescreen/homescreen";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController) {

  }
  signup(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
     this.nativePageTransitions.slide(options);
      this.navCtrl.push(SignUp)
  }
  forgotpwd(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
     this.nativePageTransitions.slide(options);
    this.navCtrl.push(ForgotPassword)
    
  }
  signin(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
     this.nativePageTransitions.slide(options);
    this.navCtrl.push(HomeScreen)
    
  }
}
