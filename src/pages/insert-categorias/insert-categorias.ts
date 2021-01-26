import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';

/**
 * Generated class for the InsertCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-categorias',
  templateUrl: 'insert-categorias.html',
})
export class InsertCategoriasPage {

  cat : CategoriaDTO = {
    id : null,
    nome : "",
    username : ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriasService : CategoriaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertCategoriasPage');
  }

  home(){
    this.navCtrl.push("CategoriasPage");
  }

  insert(){
    this.categoriasService.insert(this.cat).subscribe(response => {
      this.navCtrl.push("CategoriasPage")});
  }

}
