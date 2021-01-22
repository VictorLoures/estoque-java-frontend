import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateProdutoPage } from './update-produto';

@NgModule({
  declarations: [
    UpdateProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateProdutoPage),
  ],
})
export class UpdateProdutoPageModule {}
