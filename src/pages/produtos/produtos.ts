import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { ProdutosService } from '../../domain/produtos.service';
import { ProdutosDTO } from '../../models/produtosdto';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  bucketUrl: string = API_CONFIG.bucketUrl;

  items: ProdutosDTO[];

  


  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService) {
  }

  ionViewDidLoad() {
    this.produtosService.findAll().subscribe(response => {this.items = response});
  }

  inserir(){
    this.navCtrl.push("InsertProdutoPage");
  }

  deletar(id : number){
    this.produtosService.deletar(id).subscribe(Response => {
      this.ionViewDidLoad();
    });
    
  }

  update(cod: number){
    this.produtosService.setId(cod);
      this.navCtrl.push("UpdateProdutoPage");
  }

}
