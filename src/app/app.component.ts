import { Component } from '@angular/core';
import {NgForm} from '@angular/forms' //add to use form

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

//add method below 
onSubmit(data: NgForm){
  console.log(data.value)
}
}
