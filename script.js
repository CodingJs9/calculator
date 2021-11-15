const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const buttonsGrid = document.querySelector('.buttons')

let topDisplayContent
let bottomDisplayContent

buttonsGrid.addEventListener('click', handleClick)

function handleClick(e) {
	if (e.target.classList.contains('btn')) {
		if (e.target.classList.contains('number')) {
			console.log('button clicked')
			bottomDisplay.innerText += e.target.value
			bottomDisplayContent = bottomDisplay.value
		} else if (e.target.classList.contains('ac')) {
			console.log('all cleared')
			topDisplay.innerText = ''
			bottomDisplay.innerText = ''
		}
	}
}

const add = (x, y) => {
	return x + y
}

const subtract = (x, y) => {
	return x - y
}

const multiply = (x, y) => {
	return x * y
}

const divide = (x, y) => {
	return x / y
}

const operate = (operator, x, y) => {
	switch (operator) {
		case '+':
			return add(x, y)
			break
		case '-':
			return subtract(x, y)
			break
		case '*':
			return multiply(x, y)
			break
		case '/':
			return divide(x, y)
			break
	}
}

bottomDisplay.innerText = operate('*', 35, 26)
