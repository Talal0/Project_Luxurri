import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, MenuController, ModalController, LoadingController, IonicPage } from 'ionic-angular';
import { Login } from "../login/login";
import { SignUp } from "../signup/signup";
import { OrdercarPage } from "../ordercar/ordercar";
import { ReservecarPage } from "../reservecar/reservecar";
import { DirectionPage } from '../direction/direction';
import { DriveinfoPage } from '../driveinfo/driveinfo';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
@IonicPage()
@Component({
  selector: 'homescreen',
  templateUrl: 'homescreen.html'
})
export class HomeScreen {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(private googleMaps: GoogleMaps,private menuCtrl: MenuController, private modalCtrl: ModalController, public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.loadMap();
   }
 
  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map =new GoogleMap(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  
  }

  
  OnOpenMenu() {
    this.menuCtrl.open();
  }
  presentProfileModal() {
    const profileModal = this.modalCtrl.create(DriveinfoPage);
    profileModal.present();
  }
  ordercar() {
    this.navCtrl.push(DriveinfoPage)
  }
  ReservecarPage() {
    this.navCtrl.push(ReservecarPage)
  }

  DirectionPage() {
    const profileModal = this.modalCtrl.create(DirectionPage);
    profileModal.present();
  }
}