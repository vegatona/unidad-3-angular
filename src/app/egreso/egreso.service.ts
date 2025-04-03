import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
// Lista de egresos inicial
export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta Depto', 900),
    new Egreso('Ropa', 200)
  ];

  // Metodo para agregar nuevo egreso
  agregarEgreso(egreso: Egreso) {
    this.egresos.push(egreso);
  }

  // Metodo para eliminar un egreso de la lista
  eliminarEgreso(egreso: Egreso) {
    const indice = this.egresos.indexOf(egreso);
    if (indice !== -1) {
      // Elimina el egreso en la posición encontrada
      this.egresos.splice(indice, 1);
    }
  }

  // Metodo para sumar el total de egresos
  getTotalEgresos(): number {
    return this.egresos.reduce((total, egreso) => total + egreso.valor, 0);
  }
}
