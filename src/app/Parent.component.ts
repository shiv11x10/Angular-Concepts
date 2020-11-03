import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
    <!--<app-counter (update)="UpdateCounter($event)"></app-counter>-->
    <app-counter #counter1></app-counter>
    <h2>Counter Value</h2>
    {{counter1.counter}}
    `
})
export class ParentComponent implements OnInit {

    constructor() { }

     // UpdateCounter(value){
    //     alert("COunter Value "+value)
    // }

    ngOnInit() { 

    }

}