import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploPipesComponent } from './ejemplo-pipes/ejemplo-pipes.component';
import { PipePersonalizadoPipe } from './ejemplo-pipes/pipes/pipe-personalizado.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EjemploPipesComponent, PipePersonalizadoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unidad_3';
}
