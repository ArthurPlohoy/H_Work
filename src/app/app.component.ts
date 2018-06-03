import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	titleOfOperand1 = 'Первое число';
	titleOfOperand2 = 'Второе число';
	result: number;
	firstNum: number;
	secondNum: number;

	getFirstNumberAdd(value: number) {
		this.firstNum = Number(value);
	}
	getSecondNumberAdd(value: number) {
		this.secondNum = Number(value);
	}
	onBtnClickAdd() {
		this.result = this.firstNum + this.secondNum
		console.log(this.result);
	}


  getFirstNumberSub(value: number) {
		this.firstNum = Number(value);
	}
	getSecondNumberSub(value: number) {
		this.secondNum = Number(value);
	}
	onBtnClickSub() {
		this.result = this.firstNum - this.secondNum
		console.log(this.result);
	}


  getFirstNumberMul(value: number) {
    this.firstNum = Number(value);
  }
  getSecondNumberMul(value: number) {
    this.secondNum = Number(value);
  }
  onBtnClickMul() {
    this.result = this.firstNum * this.secondNum
    console.log(this.result);
  }

  getFirstNumberDiv(value: number) {
    this.firstNum = Number(value);
  }
  getSecondNumberDiv(value: number) {
    this.secondNum = Number(value);
  }
  onBtnClickDiv() {
    this.result = this.firstNum / this.secondNum
    console.log(this.result);
  }
}
