import { Component, OnInit } from '@angular/core';
import { EgresoService } from './egreso.service';
import { Egreso } from './egreso.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
// Arreglo para almacenar los egresos para el total de ingresos
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  totalIngresos: number = 0;
  
  // Se inyectan los servicios de egresos e ingresos
  constructor(private egresoService: EgresoService, private ingresoService: IngresoService) {}

  ngOnInit() {
    this.egresos = this.egresoService.egresos;
    // Se obtiene el total de ingresos
    this.totalIngresos = this.ingresoService.getTotalIngresos();
  }

  //Porcentaje de un egreso con respecto al total de ingresos
  calcularPorcentaje(egreso: Egreso): number {
    if (this.totalIngresos === 0) return 0;
    return (egreso.valor / this.totalIngresos) * 100;
  }

  // Método para eliminar un egreso
  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminarEgreso(egreso);
    //Actualizar el total de ingresos después de eliminar
    this.totalIngresos = this.ingresoService.getTotalIngresos();
  }
}
