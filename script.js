const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const buttonsGrid = document.querySelector('.buttons')

buttonsGrid.addEventListener('click', handleClick)

let operator
let firstNumber
let secondNumber
let isNegative = false

function handleClick(e) {
	if (!e.target.classList.contains('btn')) return
	if (e.target.classList.contains('number')) {
		numberKey(e.target)
	} else if (e.target.classList.contains('operator')) {
		operatorKey(e.target)
	} else if (e.target.classList.contains('negative')) {
		changeSign(isNegative)
	} else if (e.target.classList.contains('equals')) {
		equalsKey()
	} else if (e.target.classList.contains('ac')) {
		allClear()
	} else if (e.target.classList.contains('del')) {
		backSpace()
	}
}

const numberKey = (target) => {
	bottomDisplay.innerText += target.value
}

const operatorKey = (target) => {
	firstNumber = parseFloat(bottomDisplay.innerText)
	bottomDisplay.innerText += target.value
	topDisplay.innerText = bottomDisplay.innerText
	bottomDisplay.innerText = ''
	operator = target.value
}

const changeSign = (isNegative) => {
	isNegative = !isNegative
	if (isNegative === true) {
		bottomDisplay.innerText =
			parseFloat(bottomDisplay.innerText) -
			parseFloat(bottomDisplay.innerText * 2)
	}
}

const equalsKey = () => {
	secondNumber = parseFloat(bottomDisplay.innerText)
	topDisplay.innerText += bottomDisplay.innerText + '='
	bottomDisplay.innerText = operate(operator, firstNumber, secondNumber)
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
