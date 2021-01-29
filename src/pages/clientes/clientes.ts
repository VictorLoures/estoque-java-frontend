import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../domain/cliente.service';
import { ClienteDTO } from '../../models/clienteDto';
import { ProdutosDTO } from '../../models/produtosdto';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

items : ClienteDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService : ClienteService) {
  }

  ionViewDidLoad() {
    this.clienteService.findAll().subscribe(response => {this.items = response});
  }

  deletar(id : number){
    this.clienteService.delete(id).subscribe(response => {this.ionViewDidLoad()});
  }

  update(id : number){
    this.clienteService.setId(id);
    this.navCtrl.push("UpdateClientesPage");
  }

  cadastrar(){
    this.navCtrl.push("InsertClientesPage");
  }

  home(){
    this.navCtrl.push("DploginPage");
  }
}
