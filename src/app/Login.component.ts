import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <h2>Login</h2>

        <!-- Two way data flow with function call 
        User Name  :<input type="text" [value]="username" #user/><br>
        Password : <input type="text" [value]="password" #pass/><br> 

        <button (click)="change(user.value, pass.value)">Login</button> -->

        <!--Two way binding with nqModel -->
        User Name  :<input type="text" [(ngModel)]="username"/><br>
        Password : <input type="text" [(ngModel)]="password" #pass/><br> 


        <h2>Model(Source) Values</h2>
        <h2>{{username}}</h2>
        <h2>{{password}}</h2>
     `
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;
    constructor() { 
        this.username = "admin";
        this.password = "admin";
    }

    change(user:string, pass:string) {
        this.username = user;
        this.password = pass;
    }

    ngOnInit() { 

    }

}