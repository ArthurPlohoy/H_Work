import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})

export class OperandComponent {
  @Input() operandTitle: string;
  @Output() changeValue = new EventEmitter<number>();
  userNumber: number;

  constructor() { 
    console.log('Component constructor');
  }

  changeInput() {
    this.changeValue.emit(this.userNumber);  
  } 
}
