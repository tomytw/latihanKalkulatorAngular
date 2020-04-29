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
  operator = 0;
  addString(angka){
    this.operasi += angka;
  }

  sudahAdaOperasi = false;
  setOperand(op){
    if(this.sudahAdaOperasi){
      alert("hanya bisa menggunakan 1 operasi saja!")
      return
    }
    else{
      this.sudahAdaOperasi = true;
    }
    this.operator = op;
    if(op ==0){
      this.operasi += "-";
    }
    else if(op ==1){
      this.operasi += "+";
    }
    else if(op ==2){
      this.operasi += "*";
    }
    else if(op ==3){
      this.operasi += "/";
    }
  }

  operand1 = 0;
  operand2 = 0;
  result = 0;
  passres(){

    let strings = this.operasi.split(/[.*+-/_]/);

    if(this.operator == 0){
      this.result = Number(strings[0]) - Number(strings[1]);
    }
    else if(this.operator == 1){
      this.result = Number(strings[0]) + Number(strings[1]);
    }
    else if(this.operator == 2){
      this.result = Number(strings[0]) * Number(strings[1]);
    }
    else if(this.operator == 3){
      this.result = Number(strings[0]) / Number(strings[1]);
    }
    
    this.router.navigate(['/result',this.result]);

  }
}
