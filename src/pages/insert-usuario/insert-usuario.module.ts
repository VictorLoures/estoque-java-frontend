import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertUsuarioPage } from './insert-usuario';

@NgModule({
  declarations: [
    InsertUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertUsuarioPage),
  ],
})
export class InsertUsuarioPageModule {}
