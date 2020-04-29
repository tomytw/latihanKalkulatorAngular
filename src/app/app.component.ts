import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Kalkulator';

  constructor(private router : Router) {}

  operasi = "";
  operand = "";
  addString(angka){
    this.operasi += angka;
  }

  setOperand(op){
    if(op ==0){
      this.operasi += "-";
    }
    else if(op ==1){
      this.operasi += "+";
    }
    else if(op ==2){
      this.operasi += "*";
    }
    else if(op ==2){
      this.operasi += "/";
    }
  }

  operand1 = 0;
  operand2 = 0;

  passres(){
    this.router.navigate(['/result',3]);
      
  }
}
