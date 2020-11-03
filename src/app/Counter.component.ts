//demo of passing data from child to parent.
//parent - Parent.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <button (click)="Increment()">Increment</button>
    `
})
export class CounterComponent implements OnInit {

    counter = 0;

    @Output() // Child can pass value to Parent by raising @Output() event
    update:EventEmitter<number> =new EventEmitter<number>()
    constructor() { }

    ngOnInit() { 

    }

    Increment() {
        this.counter++;
        this.update.emit(this.counter) //raising an event
    }

}