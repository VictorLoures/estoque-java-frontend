import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosService } from '../../domain/produtos.service';
import { ProdutosDTO } from '../../models/produtosdto';

/**
 * Generated class for the ProdutosDaCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-da-categoria',
  templateUrl: 'produtos-da-categoria.html',
})
export class ProdutosDaCategoriaPage {

  produtos: ProdutosDTO[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosService : ProdutosService) {
  }

  ionViewDidLoad() {
    
    this.produtosService.findProds().subscribe(response => {this.produtos = response});
    console.log(this.produtos);
  }

  inserir(){
    this.produtosService.setCond("true");
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

  home(){
    this.navCtrl.push("CategoriasPage");
}

}
