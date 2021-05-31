import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { ProdutosService } from '../../domain/produtos.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';
import { ProdutosDTO } from '../../models/produtosdto';
import { ProdutosBaixaDTO } from '../../models/produtosdtoBaixa';

/**
 * Generated class for the RegistrarSaidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-entrada',
  templateUrl: 'registrar-entrada.html',
})
export class RegistrarEntradaPage {

  total : number;
  idC : number;
  qteEntrada : number;
  lucro: number;
item : ProdutosBaixaDTO = {
  id : null,
  nome : "",
  preco : null,
  total : 0,
  precoS : ""
};

cats : CategoriaDTO [];

prods : ProdutosBaixaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService,
     public catregroiaService :CategoriaService) {
  }

  ionViewDidLoad() {
    this.qteEntrada = 0;
    this.catregroiaService.findAll().subscribe(response =>{this.cats = response})
    this.produtosService.findAll().subscribe(response => {this.prods = response});
    
  }

  preencheCod(id : number){
    this.qteEntrada = 0;
      this.produtosService.findOne(id).subscribe(response => {
        this.item = response
      },
      error => {alert("Id Inválido!")});
  }

  preenchenome(nome : string){
    this.qteEntrada = 0;
    this.produtosService.findByNome(nome).subscribe(response => {
      this.item = response
    },
    error => {alert("Nome Inválido!")});
}

preencheBusca(prod : ProdutosDTO,  id : number, total : number) {
    this.item.id = prod.id;
    this.item.nome = prod.nome;
    this.item.preco = prod.preco;
    this.idC = id;
    this.total = total;
  }

  setqte(qte: string){
    this.qteEntrada = parseInt(qte);
  }

homprodutos(){
  this.navCtrl.push("DploginPage");
}

updateEntrada(prod : ProdutosBaixaDTO){  
  prod.total =  this.total + this.qteEntrada;  
  this.produtosService.update(prod, this.idC).subscribe(response => {this.navCtrl.push("DploginPage")});
}


}
