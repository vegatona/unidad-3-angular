import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})

// Lista de ingresos inicial
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta Coche', 500)
  ];

  // Metodo para agregar un nuevo ingreso
  agregarIngreso(ingreso: Ingreso) {
    this.ingresos.push(ingreso);
  }

  // Metodo para eliminar un ingreso
  eliminarIngreso(ingreso: Ingreso) {
    const indice = this.ingresos.indexOf(ingreso);
    if (indice !== -1) {
      this.ingresos.splice(indice, 1);
    }
  }

  // Metodo para sumar el total de ingresos
  getTotalIngresos(): number {
    return this.ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
  }
}
