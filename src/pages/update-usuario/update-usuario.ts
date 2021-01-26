import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario.service';
import { UsuarioDTO } from '../../models/usuariodto';

/**
 * Generated class for the UpdateUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-usuario',
  templateUrl: 'update-usuario.html',
})
export class UpdateUsuarioPage {

usuario : UsuarioDTO = {
  id : "",
  nome : "",
  email : "",
  perfil : ""
}

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService : UsuarioService) {
  }

  ionViewDidLoad() {
    this.usuarioService.findOne(this.usuarioService.getId()).subscribe(response => {this.usuario = response});
    console.log(this.usuario);
  }

  vinicio(){
    this.navCtrl.push("UsuarioPage");
  }

  update(user : UsuarioDTO){
    this.usuarioService.update(user).subscribe(response => {this.navCtrl.push("UsuarioPage")});
  }

}
