
const keyboardArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M']

function generateKeyboard() {
    for (let i = 0; i < keyboardArray.length; i++) {
        const keyboard = document.getElementById('keyboard')
        const buttonLetter = document.createElement('button')
        const spanLetter = document.createElement('span')
        buttonLetter.className = 'keyboardKey'
        spanLetter.className = 'keyboardLetter'
        spanLetter.textContent = keyboardArray[i]
        buttonLetter.append(spanLetter)
        keyboard.append(buttonLetter)
    }
}

export { generateKeyboard }