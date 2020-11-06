import { Component, OnInit } from '@angular/core';
import { LoginService } from './Login.service';

@Component({
    selector: 'app-login',
    template: `
        <app-header></app-header>

        <h2>Login</h2>

        <!-- Two way data flow with function call 
        User Name  :<input type="text" [value]="username" #user/><br>
        Password : <input type="text" [value]="password" #pass/><br> 

        <button (click)="change(user.value, pass.value)">Login</button> -->

        <!--Two way binding with nqModel -->
        User Name  :<input type="text" [(ngModel)]="username"/><br>
        Password : <input type="text" [(ngModel)]="password" #pass/><br> 

        <button (click)="change()">Login</button>

        <!--<h2>Model(Source) Values</h2>
        <h2>{{username}}</h2>
        <h2>{{password}}</h2>-->
     `
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;
    constructor(private loginservice: LoginService) { 
        this.username = "admin";
        this.password = "admin";
    }

    change() {
       this.loginservice.setUserName(this.username);
    }

    ngOnInit() { 

    }

}