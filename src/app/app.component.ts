import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fibonacci';
  public numb!: number;
  public result!: number;
fib(){
  let phi = (1 + Math.sqrt(5)) / 2;
  this.result=Math.round(Math.pow(phi, this.numb) / Math.sqrt(5));
  return this.result;
}
  
}
