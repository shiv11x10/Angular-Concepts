import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signupform',
    templateUrl: 'signupform.component.html',
    styles: [
        `
        small{
            color:red;
            // font-size:xx-large;
        }
        input.ng-valid{
            border-left:solid 7px green;
        }
        input.ng-invalid{
            border-left:solid 7px red;
        }
        input.ng-pristine{
            background:peachpuff;
        }
        input.ng-dirty{
            background:purple;
            color:white;
        }
        `
    ]
})
export class SignupFormComponent implements OnInit {

    user = {
        name:'Sachin',
        address:'mumbai',
        email:'sachin@gmail.com',
        pincode:411009
    }

    constructor() { }

    ngOnInit() { 

    }

    postForm() {
        alert("form submitted"+ this.user.name);
    }

}