import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title: string = 'Contador Redux';
  counter: number = 0;

  constructor(private store: Store<{counter: number}>){
    store.select('counter').subscribe( counter => {
      this.counter = counter;
    });
  }

  increment(){
    // this.counter++;
    this.store.dispatch(increment());
    console.log("Incrementando...");
  }

  decrement(){
    // this.counter--;
    this.store.dispatch(decrement());
    console.log("Decrementando...");
  }

  reset(){
    // this.counter = 0;
    this.store.dispatch(reset());
    console.log("Reseteando...");
  }
}
