import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeScreen } from "../homescreen/homescreen";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the ThankyouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController, public navParams: NavParams) {
  }
  homeScreen(){
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
