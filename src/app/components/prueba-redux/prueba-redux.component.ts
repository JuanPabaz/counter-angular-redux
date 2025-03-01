import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-prueba-redux',
  imports: [],
  templateUrl: './prueba-redux.component.html',
  styleUrl: './prueba-redux.component.css'
})
export class PruebaReduxComponent {
  counter: number = 0;

  constructor(store: Store<{counter: number}>){
    store.select('counter').subscribe(counter => {
      this.counter = counter;
    })
  }
}
