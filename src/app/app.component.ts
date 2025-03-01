import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { PruebaReduxComponent } from './components/prueba-redux/prueba-redux.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, PruebaReduxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-redux';
}
