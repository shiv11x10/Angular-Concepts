import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                debellate Technologies
            </a>
        </div>
        <ul class="nav navbar-nav">
        <li *ngFor="let item of menus">
            <a href="#">{{item}}</a>
        </li>
        </ul>
    </nav>
    `
})
export class MenuComponent implements OnInit {
//structural directives: they are responsible for HTML layout - ngFor, ngIf

    menus = []
    constructor() {
        this.menus = ["Home", 'About us', 'Products'];
     }

    ngOnInit() { 

    }

}