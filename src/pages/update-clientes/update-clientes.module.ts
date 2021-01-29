import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateClientesPage } from './update-clientes';

@NgModule({
  declarations: [
    UpdateClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateClientesPage),
  ],
})
export class UpdateClientesPageModule {}
