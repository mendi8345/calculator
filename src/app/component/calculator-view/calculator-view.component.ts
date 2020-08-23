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

  result:number;
  display(input:string){
     this.result = this.calculatorService.display(input)
  }

  clear(){
    this.result = this.calculatorService.clear()
 }
 displayResult(){
  this.result =this.calculatorService.solve()
  // this.result=this.currentInput
}

//   currentInput:string='';
// //  inputSize:number=this.currentInput.length%8==0 ?this.inputSize-1 :this.inputSize

//   previousInput:string='';
//   currentOperator:string=''

//   display(input:string){
//     if (input === '.' && this.currentInput.includes('.')) return
//     if(input ==='+'||input ==='-'||input ==='/'||input ==='*' ){
//       if(this.currentOperator==='') {
//         this.previousInput= this.currentInput
//         this.currentInput=''
//         this.currentOperator=input
//         return;
//         }
//         else{
//           this.solve()
//           this.currentOperator=input
//           return;
//         }
//   }
//   if(input ==='%'||input ==='_'){
//     // this.currentInput=this.currentInput=''?this.previousInput:this.currentInput
//     // console.log("this.currentInput=",this.currentInput,"this.previousInput=",this.previousInput)
//     switch (input) {
//       case '%':
//         this.result = this.result/100
//         this.currentInput=this.result+""
//         console.log(this.result)
//         break
//       case '_':
//         this.result = -this.result
//         this.currentInput=this.result+""
//         console.log(this.result)
//         break
//         default:
//       // return
//   }
//   return this.result;
//   }
//   this.currentInput+=input
//     this.result =parseFloat(this.currentInput)
//   console.log('this.currentInput =',this.currentInput, 'this.previousInput =',this.previousInput,'this.result =',this.result )
// return this.result
//   }


//   clear() {
//    this.result = 0
//    this.currentInput =''
//    this.currentOperator = ''
//    this.previousInput = ''
//    return this.result
// }




// solve(){
//   // this.currentInput=this.result.split(this.currentOperator)[1];
//   // if(this.currentOperator==='=')
//   // this.chooseOperation(this.currentOperator)
//   this.chooseOperation(this.currentOperator)
//   console.log("in solve",this.currentOperator)
// }


// chooseOperation(operation) {
//   if (this.currentInput === '') return
//   // if (this.previousInput !== '') {
//     this.compute()
//   console.log("in chooseOperation",this.currentOperator)
//   console.log("in chooseOperation",this.currentInput)

//   // }
//   // this.currentOperator = operation
//   // this.previousInput = this.currentInput
//   this.currentInput =''
// }

// compute() {
//   let computation
//   console.log('this.currentInput =',this.currentInput, 'this.previousInput =',this.previousInput)
//   const prev = parseFloat( this.previousInput)
//   const current =parseFloat(this.currentInput)
//   if (isNaN(prev) || isNaN(current)) return
//   switch (this.currentOperator) {
//     case '+':
//       computation = prev + current
//       break
//     case '-':
//       computation = prev - current
//       break
//     case '*':
//       computation = prev * current
//       break
//     case '/':
//       computation = prev / current
//       break
//     default:
//       return
//   }
//   // this.currentOperator = computation
//   // this.result = computation
//   this.previousInput = computation
//   this.result=parseFloat(this.previousInput)
// // this.currentInput=this.result
//   // this.currentInput = ''
//   this.currentOperator = ''
// }

}
