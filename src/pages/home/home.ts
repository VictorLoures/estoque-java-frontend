import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../domain/auth.service';
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

  constructor(public navCtrl: NavController, public auth : AuthService) {

  }

  login(){
    this.auth.authenticate(this.creds).subscribe(response => {
      this.navCtrl.push('DploginPage')
      this.auth.setUsername(this.creds.nome);
    },
    error => alert("Usuário ou Senha incorreto(s)!!"))
  }

  esqueciSenha(){
    this.navCtrl.push("EsqueciSenhaPage")
  }
  
  

}
