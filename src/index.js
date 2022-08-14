
import wordData from './wordsData.json' assert { type: "json" }
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

function randomWord() {
    const lengthData = wordData.length;
    const wordPosition = Math.floor(Math.random() * lengthData)
    addTip(wordPosition)
    createWord(wordPosition)
}

function addTip(position) {
    const containerTip = document.getElementById('containerTip')
    const tipTitle = document.createElement('h1')
    tipTitle.innerText = wordData[position].category
    containerTip.append(tipTitle)
}

function createWord(position) {
    const containerTip = document.getElementById('containerKeyWord')
    const word = document.createElement('h1')
    const numberLetters = wordData[position].length
    word.innerText = ' _ '.repeat(numberLetters)
    containerTip.append(word)

}

export { generateKeyboard, randomWord }