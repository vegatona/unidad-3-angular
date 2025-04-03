import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipoOperacion: string = 'ingresoOperacion';
  descripcion: string = '';
  valor: number = 0;

  // Se inyectan los servicios de ingresos y egresos
  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) {}

  // Método para agregar ingreso o egreso
  agregarOperacion() {
     //Se asegura que la descripción no esté vacía y que el valor sea mayor a 0
    if (this.descripcion.trim() === '' || this.valor <= 0) {
      alert('Ingrese bien los campos.');
      return;
    }
    // Si es un ingreso, se agrega al servicio de ingresos
    if (this.tipoOperacion === 'ingresoOperacion') {
      this.ingresoService.agregarIngreso(new Ingreso(this.descripcion, this.valor));
    }
    // Si es un egreso, se agrega al servicio de egresos
    else {
      this.egresoService.agregarEgreso(new Egreso(this.descripcion, this.valor));
    }

    // Se reinician los campos después de agregar
    this.descripcion = '';
    this.valor = 0;
  }
}