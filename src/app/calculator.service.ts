import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {


  result:number;
  currentInput:string='';
  previousInput:string='';
  operator:string=''

  constructor() {}

  display(input:string):number{
    if (input === '.' && this.currentInput.includes('.')) return this.result
    if(input ==='+'||input ==='-'||input ==='/'||input ==='*' ){
     return this.calc(input)
  }
  if(input ==='%'||input ==='_'){
    switch (input) {
      case '%':
        this.result = this.result/100
        this.currentInput=this.result+""
        console.log(this.result)
        break
      case '_':
        this.result = -this.result
        this.currentInput=this.result+""
        console.log(this.result)
        break
        // case '.':
        // this.result = this.result+0.0
        // this.currentInput=this.result+""
        // console.log(this.result)
        // break
        default:
  }
  return this.result;
  }
  this.currentInput+=input
    this.result =parseFloat(this.currentInput)
  console.log('this.currentInput =',this.currentInput, 'this.previousInput =',this.previousInput,'this.result =',this.result )
  return this.result;
  }


  calc(operator:string){
    if(this.operator==='') {
      this.previousInput= this.currentInput
      this.currentInput=''
      this.operator=operator
      return this.result;
      }
      else{
        this.solve()
        this.operator=operator
        return this.result;
      }
  }
  clear() {
    this.result = 0
    this.currentInput =''
    this.operator = ''
    this.previousInput = ''
    return this.result
 }

 displayResult(){
   this.solve()
this.operator=''
   // this.result=this.currentInput
 }


 solve():number{
   this.chooseOperation(this.operator)
   console.log("in solve",this.operator)
  console.log('this.currentInput =',this.currentInput, 'this.previousInput =',this.previousInput,
  'this.result =',this.result ,'this.operator =',this.operator)

   return this.result
 }


 chooseOperation(operation) {
   if (this.currentInput === '') return
   // if (this.previousInput !== '') {
     this.compute()
   console.log("in chooseOperation",this.operator)
   console.log("in chooseOperation",this.currentInput)
   this.currentInput =''
 }

 compute() {
   let computation
   console.log('this.currentInput =',this.currentInput, 'this.previousInput =',this.previousInput)
   const prev = parseFloat( this.previousInput)
   const current =parseFloat(this.currentInput)
   if (isNaN(prev) || isNaN(current)) return
   switch (this.operator) {
     case '+':
       computation = prev + current
       break
     case '-':
       computation = prev - current
       break
     case '*':
       computation = prev * current
       break
     case '/':
       computation = prev / current
       break
     default:
       return
   }
   this.previousInput = computation
   this.result=parseFloat(this.previousInput)
   this.currentInput=this.result+""
  //  this.operator = ''
 }


}
