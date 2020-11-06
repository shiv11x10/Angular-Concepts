import { Component } from '@angular/core';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {
  title = 'myDreamApp';
}
