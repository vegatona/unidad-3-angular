import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Registrar los datos de localización para español
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  // Configurar idioma español
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})

// Componente para el uso de pipes en Angular
export class EjemploPipesComponent {
  empleados = [
    { nombre: 'Jesus oswaldo', sueldo: 10000, fechaNacimiento: new Date('2002-08-01') },
    { nombre: 'vannesa guadalupe', sueldo: 7000, fechaNacimiento: new Date('2010-09-05') },
    { nombre: 'Saul humberto', sueldo: 13000, fechaNacimiento: new Date('2004-07-12') }
  ];
}