import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  //give server call for dynamic data
  name:string;
  message:string;
  constructor() {
      this.name="Shivam";
      this.message = "How are you?";
  }

  ngOnInit(): void {
  }

}
