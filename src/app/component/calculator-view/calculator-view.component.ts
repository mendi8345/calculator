import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
// import { Calculator } from 'src/app/calculator.model';
import {CalculatorService} from 'src/app/calculator.service';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  // elemetRef:ElementRef;
  // @ViewChild('output', {static: true}) elemetRef:ElementRef;
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
  }
  // ngAfterViewInit(){
  //   console.log(this.elemetRef)
  // }
  result: string="0";
  textSize: number
  clearButton: string='AC'


  display(input: string) {
    this.result=this.calculatorService.display(input)
    this.result=this.calculatorService.numberWithCommas(this.result)
    this.fitText(this.result)
    console.log('result',this.result)
    this.clearButton=this.result!=="0"?'C':'AC'

  }

  clear() {
    // let previousRes= this.calculatorService.previousInput
    // let currentRes= this.calculatorService.currentInput
    this.result=this.calculatorService.clear()
    this.textSize=100
    this.clearButton='AC'
  }
  displayResult() {
    this.result=this.calculatorService.displayResult()
    this.fitText(this.result)

  }
  fitText(result) {

    let scale: number=100
    this.textSize=result.length>6? scale/result.length*6:scale
  }

}
