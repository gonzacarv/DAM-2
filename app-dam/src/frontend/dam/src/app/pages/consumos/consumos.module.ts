import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumosRoutingModule } from './consumos-routing.module';
import { ConsumosComponent } from './consumos.component';  // Asegúrate de importar el componente correctamente

@NgModule({
  declarations: [
    ConsumosComponent  // Agrega el componente a las declaraciones
  ],
  imports: [
    CommonModule,
    ConsumosRoutingModule
  ]
})
export class ConsumosModule { }
