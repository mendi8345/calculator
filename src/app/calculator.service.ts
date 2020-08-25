import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {


  result: string='0';
  currentInput: string='';
  previousInput: string='';
  operator: string=''

  constructor() {}

  display(input: string): string {
    if (input==='.'&&this.currentInput.includes('.')) return this.result
    
    if (input==='+'||input==='-'||input==='/'||input==='*') {
      this.result=this.calc(input)
      return this.result
    }

    if (input==='%'||input==='_') {
      if (this.currentInput==="") return this.result
      switch (input) {
        case '%':
          this.result=parseFloat(this.result)/100+""
          this.currentInput=this.result+""
          break
        case '_':
          this.result=-parseFloat(this.result)+""
          this.currentInput=this.result+""
          break
        default:
      }
      return this.result;
    }

    if (this.operator===''&&this.previousInput!=='')
      this.clear()

    this.currentInput+=input
    this.result=this.currentInput
    return this.result;
  }


  calc(operator: string) {
    if (this.operator==='') {
      this.previousInput=this.result
      this.currentInput=''
      this.operator=operator
      return this.result;
    }
    else {
      this.solve()
      this.operator=operator
      return this.result;
    }
  }

  clear() {
    this.result='0'
    this.currentInput=''
    this.operator=''
    this.previousInput=''
    return this.result
  }

  displayResult() {
    this.result=this.solve()
    this.operator=''
    return this.result
  }


  solve(): string {
    this.chooseOperation(this.operator)
    return this.result
  }


  chooseOperation(operation) {
    if (this.currentInput==='') return
    this.compute()
  }

  compute() {
    let computation
    const prev=parseFloat(this.previousInput)
    const current=parseFloat(this.currentInput)
    if (isNaN(prev)||isNaN(current)) return
    switch (this.operator) {
      case '+':
        computation=prev+current
        break
      case '-':
        computation=prev-current
        break
      case '*':
        computation=prev*current
        break
      case '/':
        computation=prev/current
        break
      default:
        return
    }
    this.previousInput=computation+""
    this.result=this.previousInput
    this.currentInput=''
  }
}
