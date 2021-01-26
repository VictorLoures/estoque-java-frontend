import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../domain/auth.service';
import { UsuarioService } from '../../domain/usuario.service';
import { UsuarioDTO } from '../../models/usuariodto';

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

  usuarioLogado : string;
  userA : UsuarioDTO= {
    id : "",
    nome : "",
    email: "",
    perfil : ""
  };
  items : UsuarioDTO[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
     public usuarioService : UsuarioService, public auth : AuthService) {
  }

  ionViewDidLoad() { 
   this.usuarioService.userLogado().subscribe(response => {this.userA = response}); 
    this.usuarioService.findAll().subscribe(response => {
      this.items = response
    });
  }

  home(){
    this.navCtrl.push("DploginPage");
  }

  inserir(){
    this.navCtrl.push("InsertUsuarioPage");
  }

  deletar(id : number){
    this.usuarioService.delete(id).subscribe(response => { this.ionViewDidLoad()});
  }

  update(id : number){
    this.usuarioService.setId(id);
    this.navCtrl.push("UpdateUsuarioPage");
  }


}
