//changed by Logincomponent
//subcriber to Login Service

import { Component, OnInit } from '@angular/core';
import { LoginService } from './Login.service';

@Component({
    selector: 'app-header',
    template: `
        <h2>Welcome {{username}}</h2>
    `
})
export class HeaderComponent implements OnInit {

    username:string;
    constructor(loginservice:LoginService) {
        console.log("Constr is called ------");
        //this.username = loginservice.getUserName();

         //subjscribe to observable
         loginservice.unameobservable.subscribe(
            res=>{
                console.log("User Name is changed")
                this.username = res //now set UserName When event is raised by a given subject
            }
         )
     }

    ngOnInit() { 

    }

}