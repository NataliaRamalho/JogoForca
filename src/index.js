
import  wordData  from './wordsData.js'

const keyboardArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M']
let game = {
    position: -1,
    life: 7,
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
    tipTitle.innerText = 'Dica: ' + wordData[game.position].category
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
                addToast()
            }
        }
        else {
            buttonLetter.className = 'wrong'
            game.life--
            addBody()
            if (game.life == 0) {
                addToast('lose')
            }
        }
        buttonLetter.disabled = true
    }
}

function addBody() {
    const containerGallows = document.getElementById('containerGallows')
    const body = document.createElement('div')
    switch (game.life) {
        case 6:
            body.id = 'head'
            break
        case 5:
            body.id = 'body'
            break
        case 4:
            body.id = 'armRight'
            break
        case 3:
            body.id = 'armLeft'
            break
        case 2:
            body.id = 'footRight'
            break
        case 1:
            body.id = 'footLeft'
            break
        case 0:
            const head = document.getElementById('head')
            head.className = 'effectHead'
            const rope = document.getElementById('rope')
            rope.className = 'effectRope'
            break
        default:
            console.log('erro')
    }
    if(game.life != 0){
        containerGallows.append(body)
    }
}

function resetGame() {
    game.life = 7
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

function addToast(type = 'win') {
    const keyboard = document.getElementById('keyboard')
    keyboard.innerHTML = ''
    const containerToast = document.createElement('div')
    const toastBody = document.createElement('div')
    const h1 = document.createElement('h1')
    const toastTime = document.createElement('div')
    containerToast.id = "containerToast"
    toastBody.id = "toastBody"
    toastTime.id = "toastTime"
    toastBody.appendChild(h1)
    containerToast.appendChild(toastBody)
    containerToast.appendChild(toastTime)
    document.body.appendChild(containerToast)
    toastBody.className = type
    toastTime.className = type
    h1.textContent = type == 'win' ? 'Parabéns você ganhou 🥳' : 'Você perdeu 😔'
    let porcent = 0
    const time = setInterval(() => {
        toastTime.style = `min-width: ${porcent}%`
        porcent = porcent + 1
    }, 20);

    setTimeout((() => {
        clearInterval(time)
        document.getElementById('containerToast').remove()
        resetGame()
    }), 2010)

}

export { generateKeyboard, randomWord }