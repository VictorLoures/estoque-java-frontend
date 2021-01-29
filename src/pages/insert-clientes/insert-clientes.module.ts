import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertClientesPage } from './insert-clientes';

@NgModule({
  declarations: [
    InsertClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertClientesPage),
  ],
})
export class InsertClientesPageModule {}
