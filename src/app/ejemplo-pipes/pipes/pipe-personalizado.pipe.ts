import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Convierte la primera letra en mayúscula y el resto en minúsculas
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
