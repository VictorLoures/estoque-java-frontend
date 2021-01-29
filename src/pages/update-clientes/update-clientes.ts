import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../domain/cliente.service';
import { ClienteDTO } from '../../models/clienteDto';

/**
 * Generated class for the UpdateClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-clientes',
  templateUrl: 'update-clientes.html',
})
export class UpdateClientesPage {

 items : ClienteDTO = {
  id : null,
  nome : "",
  email : "",
  numero : ""
 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService : ClienteService) {
  }

  ionViewDidLoad() {
    this.clienteService.findById(this.clienteService.getId()).subscribe(response => {this.items = response});
  }

  vinicio(){
    this.navCtrl.push("ClientesPage");
  }

  update(obj : ClienteDTO){
    this.clienteService.update(obj).subscribe(response => {this.navCtrl.push("ClientesPage")});
  }

}
