const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const buttonsGrid = document.querySelector('.buttons')

let topDisplayContent
let bottomDisplayContent

buttonsGrid.addEventListener('click', handleClick)

function handleClick(e) {
	if (e.target.classList.contains('btn')) {
		if (
			e.target.classList.contains('number') ||
			e.target.classList.contains('operator')
		) {
			bottomDisplay.innerText += e.target.value
			bottomDisplayContent = bottomDisplay.innerText
		} else if (e.target.classList.contains('ac')) {
			topDisplay.innerText = ''
			bottomDisplay.innerText = ''
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
