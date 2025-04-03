import { Component, DoCheck, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit, DoCheck {
  presupuesto: number = 0;
  totalIngresos: number = 0;
  totalEgresos: number = 0;
  porcentajeEgresos: number = 0;

  // Se inyectan los servicios de ingresos y egresos
  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) {}
  
  // Se ejecuta en cada ciclo de detección de cambios de Angular
  ngDoCheck() {
    this.actualizarDatos();
  }
  
  // Se ejecuta al inicializar el componente
  ngOnInit() {
    this.actualizarDatos();
  }
  
  // Método para actualizar los valores del presupuesto, ingreso y egreso
  actualizarDatos() {
    this.totalIngresos = this.ingresoService.getTotalIngresos();
    this.totalEgresos = this.egresoService.getTotalEgresos();
    this.presupuesto = this.totalIngresos - this.totalEgresos;
    this.porcentajeEgresos = this.totalIngresos > 0 ? (this.totalEgresos / this.totalIngresos) * 100 : 0;
  }
}
