import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { Calculator } from 'src/app/calculator.model';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  // elemetRef:ElementRef;
  constructor(private calculatorService:CalculatorService) { }

  ngOnInit() {
  }
  width:number=400
  result:string="";
  textSize:number=100


  display(input:string){

     this.result = this.calculatorService.display(input)
     this.fitText(this.result)

  }

  clear(){
    this.result = this.calculatorService.clear()
 }
 displayResult(){
   this.result =this.calculatorService.displayResult()
    this.fitText(this.result)

}
  fitText(result){
    this.textSize=result.length>6? 100/result.length*6 :100
    console.log("result=",typeof(result) )
}

}
