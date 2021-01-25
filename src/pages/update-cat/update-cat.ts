import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../domain/categoria.service';
import { CategoriaDTO } from '../../models/CategoriaDTO';
import { CategoriasPage } from '../categorias/categorias';

/**
 * Generated class for the UpdateCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-cat',
  templateUrl: 'update-cat.html',
})
export class UpdateCatPage {

  cat : CategoriaDTO = {
    id : "",
    nome: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaservice : CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaservice.findById(this.categoriaservice.getId()).subscribe(response => {
      this.cat = response
    })
  }
  home(){
    this.navCtrl.push("CategoriasPage");
  }

  update(cat : CategoriaDTO){
    this.categoriaservice.update(cat).subscribe(response => {
      this.navCtrl.push("CategoriasPage");
    });
  }

}
