import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPetPage } from '../details-pet/details-pet';

/**
 * Generated class for the MypetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypets',
  templateUrl: 'mypets.html',
})
export class MypetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypetsPage');
  }

  openPet(){
    this.navCtrl.push(DetailsPetPage);
  }

}
