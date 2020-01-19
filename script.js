
const numbers= document.querySelectorAll('[data-number]');
const operations= document.querySelectorAll('[data-operations]');
const equal= document.querySelector('[data-equal]');
const clear= document.querySelector('[data-clear]');
const display= document.querySelector('[data-display]');
const decimal= document.querySelector('[data-decimal]');
const del = document.querySelector('[data-delete]');
const plusminus = document.querySelector('[data-plusminus]');

let result= '0';
let currentNum='0';
let oldNum;
let currentOperator;
let pressedNum;


const displayNum= (num) =>{
	pressedNum= num.target.innerText;
		if (currentNum === '0' || result) {
			currentNum = pressedNum;
			result='';
			console.log(currentNum);	
		}
		else{
			currentNum = currentNum + pressedNum;
		}
	display.innerText= currentNum;	
}

const clearCalculator= () =>{
	currentNum='0';
	oldNum='';
	currentOperator=undefined;
	display.innerText= currentNum;
}

const addDecimal= () =>{
	if (!currentNum.includes('.')) {
		currentNum= currentNum += '.';
		display.innerText=currentNum;
	}
}

const delNumber= () => {
	currentNum=currentNum.slice(0,-1);
			if(currentNum === ''){
				currentNum= '0';
			}
			display.innerText= currentNum;
}

const addMinus= () =>{
	if (currentNum !== '0') {
			currentNum = currentNum * -1 ;
			display.innerText= currentNum;
	}
}

const operate= (operator) =>{
	if (oldNum) {
		calculate();
	}
	currentOperator=operator.target.innerText;
	oldNum= currentNum;
	currentNum='';
}

const calculate= () =>{
	if (!oldNum) {
		return result=currentNum;
	}
	oldNum = parseFloat(oldNum);
    currentNum = parseFloat(currentNum);

	switch(currentOperator){
		case '+':
		if (!currentNum && currentNum !== 0) {
			result= oldNum + oldNum;
		}
		else{
			result= oldNum + currentNum;	
		}
		break;
		case '-':
			if (!currentNum && currentNum !== 0) {
			result= oldNum - oldNum;
		}
		else{
			result= oldNum - currentNum;	
		}
		break;
		case '*':
			if (!currentNum && currentNum !== 0) {
			result= oldNum * oldNum;
		}
		else{
			result= oldNum * currentNum;	
		}
		break;
		case '÷':
			if (!currentNum && currentNum !== 0) {
			result= oldNum / oldNum;
		}
		else{
			result= oldNum / currentNum;	
		}
		default:
		break;
	}

	display.innerText= result;
	oldNum='';
	currentNum=result; // that way you can do operations with result
}

numbers.forEach(number=>{
	number.addEventListener('click', displayNum)
});
clear.addEventListener('click', clearCalculator);
decimal.addEventListener('click', addDecimal);
operations.forEach(operation=>{
	operation.addEventListener('click', operate)
});
equal.addEventListener('click', calculate);
del.addEventListener('click', delNumber);
plusminus.addEventListener('click', addMinus);


