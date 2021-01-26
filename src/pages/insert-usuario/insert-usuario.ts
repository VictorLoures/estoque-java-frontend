import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario.service';
import { UsuarioDTO } from '../../models/usuariodto';
import { UsuarioSenhaDTO } from '../../models/usuariodtosSneha';

/**
 * Generated class for the InsertUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-usuario',
  templateUrl: 'insert-usuario.html',
})
export class InsertUsuarioPage {

  prod : UsuarioSenhaDTO ={
    id : null,
    nome : "",
    email : "",
    senha : ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService : UsuarioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertUsuarioPage');
  }

  insert(prod : UsuarioSenhaDTO) {
    this.usuarioService.insert(prod).subscribe(response => {this.navCtrl.push("UsuarioPage")});
  }

  vinicio(){
    this.navCtrl.push("UsuarioPage");
  }

}
