import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosDaCategoriaPage } from './produtos-da-categoria';

@NgModule({
  declarations: [
    ProdutosDaCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosDaCategoriaPage),
  ],
})
export class ProdutosDaCategoriaPageModule {}
