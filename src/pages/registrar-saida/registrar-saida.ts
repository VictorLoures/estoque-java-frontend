import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { ProdutosService } from '../../domain/produtos.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';
import { ProdutosDTO } from '../../models/produtosdto';

/**
 * Generated class for the RegistrarSaidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-saida',
  templateUrl: 'registrar-saida.html',
})
export class RegistrarSaidaPage {

  total : number;
  idC : number;
  qte : number;
  lucro: number;
item : ProdutosDTO = {
  id : null,
  nome : "",
  preco : null,
  total : null
};

cats : CategoriaDTO [];

prods : ProdutosDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService,
     public catregroiaService :CategoriaService) {
  }

  ionViewDidLoad() {
    this.qte = 0;
    this.catregroiaService.findAll().subscribe(response =>{this.cats = response})
    this.produtosService.findAll().subscribe(response => {this.prods = response});
    
  }

  preencheCod(id : number){
    this.qte = 0;
      this.produtosService.findOne(id).subscribe(response => {
        this.item = response
      },
      error => {alert("Id Inválido!")});
  }

  preenchenome(nome : string){
    this.qte = 0;
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


calculaLucro(qte : number, preco : number){
  this.lucro = qte * preco;
}

calculaqte(lucro : number, preco : number){
  this.qte = lucro / preco;
}

homprodutos(){
  this.navCtrl.push("DploginPage");
}

update(prod : ProdutosDTO){  
  prod.total = this.total - this.qte;
  this.produtosService.update(prod, this.idC).subscribe(response => {this.navCtrl.push("DploginPage")});
}


}
