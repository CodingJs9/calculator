const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const buttonsGrid = document.querySelector('.buttons')

buttonsGrid.addEventListener('click', handleClick)

let operator
let firstNumber
let secondNumber

function handleClick(e) {
	if (e.target.classList.contains('btn')) {
		if (e.target.classList.contains('number')) {
			bottomDisplay.innerText += e.target.value
		} else if (e.target.classList.contains('operator')) {
			firstNumber = parseInt(bottomDisplay.innerText)
			bottomDisplay.innerText += e.target.value
			topDisplay.innerText = bottomDisplay.innerText
			bottomDisplay.innerText = ''
			operator = e.target.value
		} else if (e.target.classList.contains('equals')) {
			secondNumber = parseInt(bottomDisplay.innerText)
			topDisplay.innerText += bottomDisplay.innerText + '='
			bottomDisplay.innerText = operate(operator, firstNumber, secondNumber)
		} else if (e.target.classList.contains('ac')) {
			topDisplay.innerText = ''
			bottomDisplay.innerText = ''
			firstNumber = 0
			secondNumber = 0
			operator = null
		} else if (e.target.classList.contains('del')) {
			bottomDisplay.innerText = bottomDisplay.innerText.slice(0, -1)
		}
	}
}

const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

const operate = (operator, x, y) => {
	switch (operator) {
		case '+':
			return Math.round(add(x, y) * 100) / 100
			break
		case '-':
			return Math.round(subtract(x, y) * 100) / 100
			break
		case '×':
			return Math.round(multiply(x, y) * 100) / 100
			break
		case '÷':
			return Math.round(divide(x, y) * 100) / 100
			break
	}
}
