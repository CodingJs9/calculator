const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const buttonsGrid = document.querySelector('.buttons')

buttonsGrid.addEventListener('click', handleClick)

let operator
let firstNumber
let secondNumber

function handleClick(e) {
	if (!e.target.classList.contains('btn')) return
	if (e.target.classList.contains('number')) {
		numberKey()
	} else if (e.target.classList.contains('operator')) {
		operatorKey()
	} else if (e.target.classList.contains('equals')) {
		equalsKey()
	} else if (e.target.classList.contains('ac')) {
		allClear()
	} else if (e.target.classList.contains('del')) {
		backSpace()
	}
}

const numberKey = () => {
	bottomDisplay.innerText += e.target.value
}

const operatorKey = () => {
	firstNumber = parseInt(bottomDisplay.innerText)
	bottomDisplay.innerText += e.target.value
	topDisplay.innerText = bottomDisplay.innerText
	bottomDisplay.innerText = ''
	operator = e.target.value
}

const equalsKey = () => {
	secondNumber = parseInt(bottomDisplay.innerText)
	topDisplay.innerText += bottomDisplay.innerText + '='
	bottomDisplay.innerText = operate(operator, firstNumber, secondNumber)
	if (secondNumber.toString().length > 4) {
		secondNumber = Math.round(secondNumber * 10) / 10
	}
}

const allClear = () => {
	topDisplay.innerText = ''
	bottomDisplay.innerText = ''
	firstNumber = 0
	secondNumber = 0
	operator = null
}

const backSpace = () => {
	bottomDisplay.innerText = bottomDisplay.innerText.slice(0, -1)
}

const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

const operate = (operator, x, y) => {
	switch (operator) {
		case '+':
			return add(x, y)
			break
		case '-':
			return subtract(x, y)
			break
		case '×':
			return multiply(x, y)
			break
		case '÷':
			return divide(x, y)
			break
	}
}
