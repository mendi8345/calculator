import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
//   result:string="";
//  input=''
//   currentInput:string=" ";
//   previousInput:string;
//   currentOperator:string=''

//   display(input:string){

//     if (input === '.' && this.result.includes('.')) return
//     if(input ==='+'||input ==='-'||input ==='/'||input ==='*' && this.currentInput!==""){
//       if(this.currentOperator!=='')
//       {this.solve()
//         this.result=this.result
//         }
//         this.currentOperator=input
//     this.previousInput=this.currentInput
//     // this.previousInput=input.slice(0,input.length-1)
//     // this.previousInput=this.result;
//   }
//   this.currentInput+=input
//   console.log("currentInput",this.currentInput)
//   // if(this.currentOperator)
//     // this.solve()

//   // this.tempResult
//   // console.log("this.currentInput",this.currentInput)

//     console.log(input )
//     console.log(this.currentOperator)
//     this.result+=input
//   }


//   clear() {
//    this.result = ""
//    this.currentInput = ""
//    this.currentOperator = ""
//    this.previousInput = ""
// }
// displayResult(){
//   // this.solve()
//   // this.result=this.currentInput
// }


// solve(){
//   this.currentInput=this.result.split(this.currentOperator)[1];
//   // if(this.currentOperator==='=')
//   // this.chooseOperation(this.currentOperator)
//   this.chooseOperation(this.currentOperator)
//   console.log("in solve",this.currentOperator)
// }


// chooseOperation(operation) {
//   if (this.currentInput === '') return
//   if (this.previousInput !== '') {
//     this.compute()
//   console.log("in chooseOperation",this.currentOperator)
//   console.log("in chooseOperation",this.currentInput)

//   }
//   // this.currentOperator = operation
//   // this.previousInput = this.currentInput
//   // this.currentInput = ''
// }

// compute() {
//   let computation
//   const prev = parseFloat(this.previousInput)
//   const current = parseFloat(this.currentInput)
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
//   this.result = computation
//   console.log("in compute",this.currentInput)
// this.currentInput=this.result
//   this.previousInput = ''
//   this.currentOperator = ''
// }
}
