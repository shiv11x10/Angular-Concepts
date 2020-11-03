//Use DOM manupilation with viewchild decorator
import { Component, OnInit ,ViewChild } from '@angular/core';

@Component({
    selector: 'app-Test',
    template: `
    <h2>Test component</h2>
    <div #div1> Initial Text</div>
    
    <button (click)="Search()">Search</button>
    <app-counter #counter></app-counter>
    `
})
export class TestComponent implements OnInit {
    @ViewChild('div1')
    elemnt // It is wrapper over your HTML element
    @ViewChild('counter')
    counter

    Search(){
        console.log(this.counter)
         console.log(this.elemnt)
         var domelement= this.elemnt.nativeElement //DOM element
         
         domelement.style.background= 'red'
         domelement.innerText='Set new Text'
         var elements =   document.getElementsByTagName('div')
         console.log(elements)
    }
    constructor() {
        console.log("COntr is called")
        // console.log(this.elemnt)
        //  var domelement= this.elemnt.nativeElement //DOM element
        //  domelement.style.background= 'red'
        //  domelement.innerText='Set new Text'
        //  var elements =   document.getElementsByTagName('div')
        //  console.log(elements)
        //DOm Manipulation 
     }
    ngOnInit() { 
        console.log("ngOninit")
    }
}