import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario.service';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService : UsuarioService) {
  }

  ionViewDidLoad() {
    this.usuarioService.findAll().subscribe();
  }

}
