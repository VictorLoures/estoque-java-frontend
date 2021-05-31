import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { ProdutosService } from '../../domain/produtos.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';
import { ProdutosDTO } from '../../models/produtosdto';

/**
 * Generated class for the InsertProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-produto',
  templateUrl: 'insert-produto.html',
})
export class InsertProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService,
     public catService : CategoriaService) {
  }

  cond : string;
  id : number;
  idCategoria : number;
  cats : CategoriaDTO[];
  prod : ProdutosDTO = {
    id: null,
    nome : "",
    preco : 0,
    total : 0,
    precoS : ""
  };
  

  ionViewDidLoad() {
    this.cond = this.produtosService.getCond();
    if(this.cond == "true"){
      this.idCategoria = this.produtosService.getIdc();
    }   
    this.catService.findAll().subscribe(response => { this.cats = response});
    console.log('ionViewDidLoad InsertProdutoPage');
  }

  inserir(){
    if(this.cond == 'true'){
      this.produtosService.inserir(this.produtosService.getIdc(), this.prod).subscribe(response => {
        this.navCtrl.push('ProdutosPage')
     });
    }else{
      this.produtosService.inserir(this.id, this.prod).subscribe(response => {
        this.navCtrl.push('ProdutosPage')
     });
    }
    
    
  }

  setCategoria(id: number){
    this.id = id;
  }

  homprodutos(){
    this.navCtrl.push("DploginPage");
  }

}
