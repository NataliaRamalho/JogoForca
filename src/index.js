
import wordData from './wordsData.json' assert { type: "json" }
const keyboardArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M']
let game = {
    position: -1,
    life: 6,
    word: []
}

function generateKeyboard() {
    const keyboard = document.getElementById('keyboard')
    keyboard.innerHTML = ''
    for (let i = 0; i < keyboardArray.length; i++) {
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
    containerTip.innerHTML = ''
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
    containerTip.innerHTML = ''
    containerTip.append(word)
}

function kickLetter(event, letter, buttonLetter) {
    event.preventDefault()
    if (game.position != -1) {
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
    const containerGallows = document.getElementById('containerGallows')
    const body = document.createElement('div')
    switch (game.life) {
        case 5:
            body.id = 'head'
            break
        case 4:
            body.id = 'body'
            break
        case 3:
            body.id = 'armRight'
            break
        case 2:
            body.id = 'armLeft'
            break
        case 1:
            body.id = 'footRight'
            break
        case 0:
            body.id = 'footLeft'
            break
        default:
            console.log('error')
    }

    containerGallows.append(body)
}

function resetGame() {
    game.life = 6
    randomWord()
    generateKeyboard()
    resetGallows()
}

function resetGallows() {
    const containerGallows = document.getElementById('containerGallows')
    containerGallows.innerHTML = `
        <div id="gallowsY"></div>
        <div id="gallowsX"></div>
        <div id="rope"></div>
    `
}

export { generateKeyboard, randomWord }