
import wordData from './wordsData.json' assert { type: "json" }
const keyboardArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M']
let game = {
    position: -1,
    life: 5,
    word: []
}

function generateKeyboard() {
    for (let i = 0; i < keyboardArray.length; i++) {
        const keyboard = document.getElementById('keyboard')
        const buttonLetter = document.createElement('button')
        const spanLetter = document.createElement('span')
        buttonLetter.className = 'keyboardKey'
        spanLetter.className = 'keyboardLetter'
        spanLetter.textContent = keyboardArray[i]
        buttonLetter.onclick = (event) => kickLetter(event, keyboardArray[i], buttonLetter)
        buttonLetter.append(spanLetter)
        keyboard.append(buttonLetter)
    }
}

function randomWord() {
    const lengthData = wordData.length;
    game.position = Math.floor(Math.random() * lengthData)
    addTip()
    createWord()
}

function addTip() {
    const containerTip = document.getElementById('containerTip')
    const tipTitle = document.createElement('h1')
    tipTitle.innerText = wordData[game.position].category
    containerTip.append(tipTitle)
}

function createWord() {
    const containerTip = document.getElementById('containerKeyWord')
    const word = document.createElement('h1')
    const numberLetters = wordData[game.position].length
    const writeWord = '_'.repeat(numberLetters)
    word.innerText = writeWord
    game.word = [...writeWord]
    containerTip.append(word)

}

function kickLetter(event, letter, buttonLetter) {
    event.preventDefault()
    if (game.position != -1) {
        console.log(wordData[game.position])
        const isLetter = wordData[game.position].word.toLowerCase().includes(letter.toLowerCase())
        if (isLetter) {
            buttonLetter.className = 'right'
            const arrayKeyWord = [...wordData[game.position].word]
            game.word = arrayKeyWord.map((keyLetter, index) => {
                if (game.word[index] != '_') {
                    return keyLetter.toUpperCase()
                }
                else if (letter.toLowerCase() == keyLetter.toLowerCase()) {
                    return letter.toUpperCase()
                }
                else {
                    return '_'
                }
            })
            const containerTip = document.getElementById('containerKeyWord')
            const word = document.createElement('h1')
            containerTip.innerHTML = ''
            word.innerText = game.word.join('')
            containerTip.append(word)
            if (!game.word.join('').includes('_')) {
                alert('Win')
                resetGame()
            }
        }
        else {
            buttonLetter.className = 'wrong'
            game.life--
            addBody()
            if (game.life == 0) {
                alert('Game over')
                resetGame()
            }
        }
        buttonLetter.disabled = true
    }
}

function addBody() {

}

function resetGame() {

}
export { generateKeyboard, randomWord }