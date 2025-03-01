import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title: string = 'Contador Redux';
  counter: number;

  constructor(){
    this.counter = 0;
  }

  increment(){
    this.counter++;
    console.log("Incrementando...");
  }

  decrement(){
    this.counter--;
    console.log("Decrementando...");
  }

  reset(){
    this.counter = 0;
    console.log("Reseteando...");
  }
}
