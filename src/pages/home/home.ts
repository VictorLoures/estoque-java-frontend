import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../domain/auth.service';
import { UsuarioService } from '../../domain/usuario.service';
import { CredenciaisDTO } from '../../models/credenciaisdto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO={
    nome: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public auth : AuthService, public userService : UsuarioService) {

  }

  login(){
    this.auth.authenticate(this.creds).subscribe(response => {
      this.userService.setUsername(this.creds.nome);
      this.navCtrl.push('DploginPage')
    },
    error => alert("Usuário ou Senha incorreto(s)!!"))
  }

  esqueciSenha(){
    this.navCtrl.push("EsqueciSenhaPage")
  }
  
  

}
