import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaService } from '../../domain/categoria.service';
import { ProdutosService } from '../../domain/produtos.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';


/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketUrl;

  cat : CategoriaDTO = {
    id : " ",
    nome : " "
  };
  items: CategoriaDTO[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public categoriaService : CategoriaService,
     public produtosService : ProdutosService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(response => {this.items = response});
  }

  produtos(id : number){
    this.produtosService.setIdc(id);
    console.log(id);
    this.navCtrl.push("ProdutosDaCategoriaPage");
  }

  home(){
    this.navCtrl.push("DploginPage");
  };

  deletar(id : number){
      this.categoriaService.delete(id).subscribe(response => {
        this.ionViewDidLoad();
      });
  }

  update(id : number){
    this.categoriaService.setId(id);
    this.navCtrl.push("UpdateCatPage");
  }


}
