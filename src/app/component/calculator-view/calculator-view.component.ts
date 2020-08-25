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


  display(input: string) {
    this.result=this.calculatorService.display(input)
    this.fitText(this.result)
  }

  clear() {
    this.result=this.calculatorService.clear()
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
