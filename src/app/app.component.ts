import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploPipesComponent } from './ejemplo-pipes/ejemplo-pipes.component';
import { PipePersonalizadoPipe } from './ejemplo-pipes/pipes/pipe-personalizado.pipe';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EgresoComponent,IngresoComponent,
    CabeceroComponent,FormularioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unidad_3';
}
