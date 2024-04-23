// home.page.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConsumoService } from '../services/consumo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  consumos: any[] = [];

  constructor(
    private consumoService: ConsumoService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cargarConsumos();
  }

  cargarConsumos(): void {
    this.consumoService.getConsumos().subscribe({
      next: (data) => {
        this.consumos = data;
      },
      error: (error) => {
        console.error('Error al cargar consumos', error);
      }
    });
  }

  toggleEstado(consumo: any, event: any): void {
    // Directamente usar el valor del evento para cambiar el estado
    const nuevoEstado = event.detail.checked;
    consumo.estado = nuevoEstado; // Actualiza el estado en el modelo de Angular
  
    // Llamar al backend para actualizar en la base de datos
    this.consumoService.updateConsumoEstado(consumo.id, nuevoEstado).subscribe({
      next: (response) => {
        console.log('Estado actualizado:', response);
      },
      error: (error) => {
        console.error('Error al actualizar estado:', error);
        // Revertir el cambio de estado si la actualización falla
        consumo.estado = !nuevoEstado;
      }
    });
  }
  
}
