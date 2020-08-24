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
  width:number=400
  result:string="";
  textSize:number=5


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
  let scale:number=6
    for (let index = 0; index < result.length; index++) {

      if(index%1==0 && index>5){
        this.textSize-=scale
      }
        index< 10?scale=scale/2:scale=scale/4
        if(result.length <2){
          this.textSize=6
        }
    }
    // if(result.length%1==0 && result.length>5){this.textSize-=0.2}
    //  else if(result.length <2){
    //    this.textSize=6
    //  }


}

}
