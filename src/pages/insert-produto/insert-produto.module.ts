import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertProdutoPage } from './insert-produto';

@NgModule({
  declarations: [
    InsertProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertProdutoPage),
  ],
})
export class InsertProdutoPageModule {}
