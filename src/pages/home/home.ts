import { OrderPage } from './../order/order';
import { SliderPage } from './../slider/slider';

import { Component } from '@angular/core';
import { NavController,ToastController,ToastOptions } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  showMenu(){
    this.navCtrl.push(SliderPage)
  }

 onBut(){
   this.navCtrl.push(OrderPage);
 }
  
}
