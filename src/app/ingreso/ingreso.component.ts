import { Component } from '@angular/core';
import { IngresoService } from './ingreso.service';
import { Ingreso } from './ingreso.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  // Se inyecta el servicio de ingresos para acceder a los datos
  constructor(public ingresoService: IngresoService) {}

  // Método para eliminar un ingreso
  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminarIngreso(ingreso);
  }
}
