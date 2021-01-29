import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../domain/cliente.service';
import { ClienteDTO } from '../../models/clienteDto';

/**
 * Generated class for the InsertClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-clientes',
  templateUrl: 'insert-clientes.html',
})
export class InsertClientesPage {

  items : ClienteDTO = {
    id : null,
    nome : "",
    email : "",
    numero : ""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService : ClienteService) {
  }

  ionViewDidLoad() {
  }

  cadastrar(obj : ClienteDTO){
    this.clienteService.insert(obj).subscribe(response => {this.navCtrl.push("ClientesPage")});
  }

}
