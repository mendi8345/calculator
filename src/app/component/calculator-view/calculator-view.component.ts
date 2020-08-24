import { Component, OnInit } from '@angular/core';
// import { Calculator } from 'src/app/calculator.model';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {


  constructor(private calculatorService:CalculatorService) { }

  ngOnInit() {
  }

  result:string="";
  textSize:number=5


  display(input:string){

     this.result = this.calculatorService.display(input)
     this.fiteText(this.result)
  }

  clear(){
    this.result = this.calculatorService.clear()
 }
 displayResult(){
  this.result =this.calculatorService.solve()

}
fiteText(result){
    console.log(result.length,"**********************")
    if(result.length%1==0 && result.length>5){this.textSize-=0.5}
     else if(result.length <2){
       this.textSize=6
     }

}

}
