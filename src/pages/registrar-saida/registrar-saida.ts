import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { ClienteService } from '../../domain/cliente.service';
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
  selector: 'page-registrar-saida',
  templateUrl: 'registrar-saida.html',
})
export class RegistrarSaidaPage {

  email : string;
  cond : string;
  total : number;
  idC : number;
  qte : number;
  lucro: number;
itemBaixa : ProdutosBaixaDTO = {
  id : null,
  nome : "",
  preco : null,
  total : null,
  qte : null
};

item : ProdutosDTO = {
  id : null,
  nome : "",
  preco : null,
  total : null,
  precoS : ""
};

cats : CategoriaDTO [];

prods : ProdutosDTO[];
prodsAc : ProdutosBaixaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public produtosService : ProdutosService,
     public catregroiaService :CategoriaService,
     public userService : ClienteService) {
  }

  ionViewDidLoad() {
    this.cond = "false";
    this.produtosService.removeProds().subscribe();
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

update(){   
  this.produtosService.getProds().subscribe(response => {this.prodsAc = response});
  this.produtosService.updateList(this.prodsAc).subscribe(response => {
    this.userService.sendEmail(this.prodsAc, this.email, this.qte).subscribe(response => {this.navCtrl.push("DploginPage")})
  });
}

produtosAc(produto : ProdutosBaixaDTO){
  produto.total = this.total - this.qte;
  produto.total = this.total;
  produto.qte = this.qte;
  this.produtosService.guarda(produto).subscribe(response => {
    this.produtosService.getProds().subscribe(response => {
      this.prodsAc = response
    });
  });
}

setNota(cond : string){
 this.cond = cond;
}

setEmail(email : string){
  this.email = email;
  console.log(this.email);
 }
}
