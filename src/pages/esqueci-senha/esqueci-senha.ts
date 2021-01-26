import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../domain/auth.service';

/**
 * Generated class for the EsqueciSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

 email : string

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

  home(){
    this.navCtrl.push("HomePage");
  }

  recuperar(email : string){
    this.auth.recuperarSenha(email).subscribe(response => {
      alert("Email enviado!");
      this.navCtrl.push("HomePage");
    });
  }

}
