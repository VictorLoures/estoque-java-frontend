import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { ProdutosService } from '../../domain/produtos.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';
import { ProdutosDTO } from '../../models/produtosdto';



@IonicPage()
@Component({
  selector: 'page-update-produto',
  templateUrl: 'update-produto.html',
})
export class UpdateProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService,
     public catService : CategoriaService) {
  }

  id : number;
  cats : CategoriaDTO[];
  prod : ProdutosDTO = {
    id: null,
    nome : "",
    preco : 0,
    total : 0,
  };

  ionViewDidLoad() {    
    this.produtosService.findOne(this.produtosService.getId()).subscribe(response => {this.prod = response});
    this.catService.findAll().subscribe(response => { this.cats = response});
   
  }

  update(prod : ProdutosDTO){
    this.produtosService.update(prod).subscribe(Response => {
      this.navCtrl.push("ProdutosPage");
    });    
  }

  setCategoria(id: number){
    this.id = id;
  }

  home(){
    this.navCtrl.push("HomePage");
  }

}
