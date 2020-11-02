import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    // templateUrl: 'fileName.component.html'

    //using template: we can specify inline HTML
    template: `
        <h2>{{message}}</h2>
    `
})
export class HelloWorldComponent implements OnInit {

    message:string;
    constructor() {
        this.message = "In the hello world component"
     }

    ngOnInit() { 

    }

}