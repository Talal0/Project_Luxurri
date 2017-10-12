import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ThankyouPage } from '../thankyou/thankyou';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the DriveinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-driveinfo',
  templateUrl: 'driveinfo.html',
})
export class DriveinfoPage {

  constructor(private callNumber: CallNumber,private nativePageTransitions: NativePageTransitions,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriveinfoPage');
  }
  goNow(){
this.navCtrl.push(ThankyouPage)
  }

  CallNumber(){
    this.callNumber.callNumber("03322351256", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
  dismiss() {
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
     this.viewCtrl.dismiss();
   }
}
