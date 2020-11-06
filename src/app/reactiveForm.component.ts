import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactiveform',
    templateUrl: 'ReactiveComponent.html'
})
export class reactiveFormComponent implements OnInit {

    namestr:string = "Shivam"
    signupform: FormGroup
    constructor() {
        this.signupform = new FormGroup({
            name: new FormControl(this.namestr, Validators.required),

            address: new FormControl("Pune", Validators.compose([Validators.required, Validators.minLength(5)])),

            tel : new FormControl(123456)
        });
     }

     postForm() {
        alert("form submitted"+ this.signupform.value.name);
    }

    ngOnInit() { 

    }

}