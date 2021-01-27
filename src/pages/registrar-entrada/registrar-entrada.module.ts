import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarEntradaPage } from './registrar-entrada';

@NgModule({
  declarations: [
    RegistrarEntradaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarEntradaPage),
  ],
})
export class RegistrarEntradaPageModule {}
