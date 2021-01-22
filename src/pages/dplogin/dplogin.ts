import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DploginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dplogin',
  templateUrl: 'dplogin.html',
})
export class DploginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DploginPage');
  }

  categorias(){
    this.navCtrl.push("CategoriasPage");
  }

  produtos(){
    this.navCtrl.push("ProdutosPage");
  }

  usuario(){
    this.navCtrl.push("UsuarioPage");
  }

}
