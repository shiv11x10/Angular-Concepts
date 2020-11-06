//Implements Observables(publisher/subscriber model with RxJs)

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
    
    //subject: type of data that needs to be published(username/newspaper/blog)
    usernamesubject : Subject<string>= new Subject<string>();

    //Observable : Agency for a given subject to which we can subscribe
    unameobservable = this.usernamesubject.asObservable(); //we can also subscribe to usernamesubject(Subject) in ProductDetails component

    username:string;
    constructor() { }

    setUserName(name:string) {
        console.log("Set username");
        this.username = name;

        //emit an event(e.g NewsPaper is published)
        console.log("Publish User Name");
        this.usernamesubject.next(this.username);
    }

    getUserName():string {
        console.log("Get username");
        return this.username;
    }
}


//differnce between observable and subject - 
//https://medium.com/@bisht.mamta18/why-asobservable-with-subjects-4ac0a572d93a