greenPlayer = []
bluePlayer = []
redPlayer = []
yellowPlayer = []
user = [] //called 'user' because 'player' refers to form element names
user[0] = {}
user[1] = {}
user[2] = {}
user[3] = {}
interVar = 0
form = []
form[0] = form0
form[1] = form1
form[2] = form2
form[3] = form3
form[4] = form4
animVars = []
pieceWidth = 48
dieWidth = 80
isFinished = []
hasVictory = []
hasVictory[0] = false
hasVictory[1] = false
hasVictory[2] = false
hasVictory[3] = false
victoryExists = false

function definePositions() {
    green = []
    green[0] = green1
    green[1] = green2
    green[2] = green3
    green[3] = green4
    for (i = 0; i < 4; i++) {
        green[i].color = 'green'
        green[i].clrNum = 0
    }
    blue = []
    blue[0] = blue1
    blue[1] = blue2
    blue[2] = blue3
    blue[3] = blue4
    for (i = 0; i < 4; i++) {
        blue[i].color = 'blue'
        blue[i].clrNum = 1
    }
    red = []
    red[0] = red1
    red[1] = red2
    red[2] = red3
    red[3] = red4
    for (i = 0; i < 4; i++) {
        red[i].color = 'red'
        red[i].clrNum = 2
    }
    yellow = []
    yellow[0] = yellow1
    yellow[1] = yellow2
    yellow[2] = yellow3
    yellow[3] = yellow4
    for (i = 0; i < 4; i++) {
        yellow[i].color = 'yellow'
        yellow[i].clrNum = 3
    }
    position = []
    position[0] = {x:(77/90),y:(77/90),piece:[], number:0}
    position[1] = {x:(17/18),y:(77/90),piece:[], number:1}
    position[2] = {x:(77/90),y:(17/18),piece:[], number:2}
    position[3] = {x:(17/18),y:(17/18),piece:[], number:3}
    position[4] = {x:(77/90),y:(1/18),piece:[], number:4}
    position[5] = {x:(17/18),y:(1/18),piece:[], number:5}
    position[6] = {x:(77/90),y:(13/90),piece:[], number:6}
    position[7] = {x:(17/18),y:(13/90),piece:[], number:7}
    position[8] = {x:(1/18),y:(1/18),piece:[], number:8}
    position[9] = {x:(13/90),y:(1/18),piece:[], number:9}
    position[10] = {x:(1/18),y:(13/90),piece:[], number:10}
    position[11] = {x:(13/90),y:(13/90),piece:[], number:11}
    position[12] = {x:(1/18),y:(77/90),piece:[], number:12}
    position[13] = {x:(13/90),y:(77/90),piece:[], number:13}
    position[14] = {x:(1/18),y:(17/18),piece:[], number:14}
    position[15] = {x:(13/90),y:(17/18),piece:[], number:15}
    position[16] = {x:(77/90),y:(1/2),piece:[], number:16}
    position[17] = {x:(23/30),y:(1/2),piece:[], number:17}
    position[18] = {x:(61/90),y:(1/2),piece:[], number:18}
    position[19] = {x:(53/90),y:(1/2),piece:[], number:19}
    position[20] = {x:(1/2),y:(77/90),piece:[], number:20}
    position[21] = {x:(1/2),y:(23/30),piece:[], number:21}
    position[22] = {x:(1/2),y:(61/90),piece:[], number:22}
    position[23] = {x:(1/2),y:(53/90),piece:[], number:23}
    position[24] = {x:(13/90),y:(1/2),piece:[], number:24}
    position[25] = {x:(7/30),y:(1/2),piece:[], number:25}
    position[26] = {x:(29/90),y:(1/2),piece:[], number:26}
    position[27] = {x:(37/90),y:(1/2),piece:[], number:27}
    position[28] = {x:(1/2),y:(13/90),piece:[], number:28}
    position[29] = {x:(1/2),y:(7/30),piece:[], number:29}
    position[30] = {x:(1/2),y:(29/90),piece:[], number:30}
    position[31] = {x:(1/2),y:(37/90),piece:[], number:31}
    position[32] = {x:(17/18),y:(53/90),piece:[], number:32}
    position[33] = {x:(77/90),y:(53/90),piece:[], number:33}
    position[34] = {x:(23/30),y:(53/90),piece:[], number:34}
    position[35] = {x:(61/90),y:(53/90),piece:[], number:35}
    position[36] = {x:(53/90),y:(53/90),piece:[], number:36}
    position[37] = {x:(53/90),y:(61/90),piece:[], number:37}
    position[38] = {x:(53/90),y:(23/30),piece:[], number:38}
    position[39] = {x:(53/90),y:(77/90),piece:[], number:39}
    position[40] = {x:(53/90),y:(17/18),piece:[], number:40}
    position[41] = {x:(1/2),y:(17/18),piece:[], number:41}
    position[42] = {x:(37/90),y:(17/18),piece:[], number:42}
    position[43] = {x:(37/90),y:(77/90),piece:[], number:43}
    position[44] = {x:(37/90),y:(23/30),piece:[], number:44}
    position[45] = {x:(37/90),y:(61/90),piece:[], number:45}
    position[46] = {x:(37/90),y:(53/90),piece:[], number:46}
    position[47] = {x:(29/90),y:(53/90),piece:[], number:47}
    position[48] = {x:(7/30),y:(53/90),piece:[], number:48}
    position[49] = {x:(13/90),y:(53/90),piece:[], number:49}
    position[50] = {x:(1/18),y:(53/90),piece:[], number:50}
    position[51] = {x:(1/18),y:(1/2),piece:[], number:51}
    position[52] = {x:(1/18),y:(37/90),piece:[], number:52}
    position[53] = {x:(13/90),y:(37/90),piece:[], number:53}
    position[54] = {x:(7/30),y:(37/90),piece:[], number:54}
    position[55] = {x:(29/90),y:(37/90),piece:[], number:55}
    position[56] = {x:(37/90),y:(37/90),piece:[], number:56}
    position[57] = {x:(37/90),y:(29/90),piece:[], number:57}
    position[58] = {x:(37/90),y:(7/30),piece:[], number:58}
    position[59] = {x:(37/90),y:(13/90),piece:[], number:59}
    position[60] = {x:(37/90),y:(1/18),piece:[], number:60}
    position[61] = {x:(1/2),y:(1/18),piece:[], number:61}
    position[62] = {x:(53/90),y:(1/18),piece:[], number:62}
    position[63] = {x:(53/90),y:(13/90),piece:[], number:63}
    position[64] = {x:(53/90),y:(7/30),piece:[], number:64}
    position[65] = {x:(53/90),y:(29/90),piece:[], number:65}
    position[66] = {x:(53/90),y:(37/90),piece:[], number:66}
    position[67] = {x:(61/90),y:(37/90),piece:[], number:67}
    position[68] = {x:(23/30),y:(37/90),piece:[], number:68}
    position[69] = {x:(77/90),y:(37/90),piece:[], number:69}
    position[70] = {x:(17/18),y:(37/90),piece:[], number:70}
    position[71] = {x:(17/18),y:(1/2),piece:[], number:71}
    properties = []
    properties[0] = {color:'green',startPosition:32,endPosition:71,finishModifier:56,finishStart:16}
    properties[1] = {color:'blue',startPosition:62,endPosition:61,finishModifier:34,finishStart:28}
    properties[2] = {color:'red',startPosition:52,endPosition:51,finishModifier:28,finishStart:24}
    properties[3] = {color:'yellow',startPosition:42,endPosition:41,finishModifier:22,finishStart:20}
    colorArr = []
}

definePositions()

function clearSaveInfo() {
    storesave.innerHTML = ""
}

function clearBoard() {
    currentPlayer = 0
    playersDefined = 0
    for (i = 0; i < 4; i++) {
        delete green[i].position
        delete blue[i].position
        delete red[i].position
        delete yellow[i].position
    }
    for (i = 0; i < 72; i++) {
        position[i].piece = []
    }
}

function saveGameState() {
    let tempSave = ""
    tempSave += `currentPlayer=${currentPlayer};playersDefined=${playersDefined};player1color=${user[0].color};player2color=${user[1].color};`
    if (playersDefined > 2) {
        tempSave += `player3color=${user[2].color};`
    }
    if (playersDefined > 3) {
        tempSave += `player4color=${user[3].color};`
    }
    for (i = 0; i < 4; i++) {
        tempSave += `position${i}=${colorArr[0][i].position.number};`
    }
    for (i = 0; i < 4; i++) {
        tempSave += `position${i + 4}=${colorArr[1][i].position.number};`
    }
    if (playersDefined > 2) {
        for (i = 0; i < 4; i++) {
            tempSave += `position${i + 8}=${colorArr[2][i].position.number};`
        }
    }
    if (playersDefined > 3) {
        for (i = 0; i < 4; i++) {
            tempSave += `position${i + 12}=${colorArr[3][i].position.number};`
        }
    }
    tempSave += `victoryExists=${victoryExists};`
    savedState = btoa(tempSave)
    localStorage.setItem('saveString', savedState)
    storesave.innerHTML = "Your save data has been saved to local storage. Failing that, you can input this string into the load prompt:\n" + savedState
    setTimeout(clearSaveInfo, 10000)
}

function loadGameState(optionalState) {
    if (optionalState != 'optionalstate') {
        var loadString = atob(optionalState)
    }
    else if (localStorage.getItem('saveString') != null) {
        var loadString = atob(localStorage.getItem('saveString'))
    }
    if (typeof loadString != 'undefined') {
        clearBoard()
        loadArray = loadString.split(';')
        currentPlayer = parseInt(loadArray[0].slice(loadArray[0].indexOf('=') + 1))
        playersDefined = parseInt(loadArray[1].slice(loadArray[1].indexOf('=') + 1))
        user[0].color = loadArray[2].slice(loadArray[2].indexOf('=') + 1)
        colorArr[0] = window[user[0].color]
        user[1].color = loadArray[3].slice(loadArray[3].indexOf('=') + 1)
        colorArr[1] = window[user[1].color]
        if (playersDefined > 2) {
            user[2].color = loadArray[4].slice(loadArray[4].indexOf('=') + 1)
            colorArr[2] = window[user[2].color]
            saveIterator = 5
        }
        else {
            saveIterator = 4
        }
        if (playersDefined > 3) {
            user[3].color = loadArray[5].slice(loadArray[5].indexOf('=') + 1)
            colorArr[3] = window[user[3].color]
            saveIterator = 6
        }
        clearColors()
        for (i = 0; i < playersDefined; i++) {
            if (user[i].color == 'green') {
                greenPlayer = [i]
            }
            if (user[i].color == 'blue') {
                bluePlayer = [i]
            }
            if (user[i].color == 'red') {
                redPlayer = [i]
            }
            if (user[i].color == 'yellow') {
                yellowPlayer = [i]
            }
        }
        for (i = 0; i < 4; i++) {
            moveThis(colorArr[0][i],position[loadArray[saveIterator + i].slice(loadArray[saveIterator + i].indexOf('=') + 1)])
        }
        for (i = 0; i < 4; i++) {
            moveThis(colorArr[1][i],position[loadArray[saveIterator + 4 + i].slice(loadArray[saveIterator + 4 + i].indexOf('=') + 1)])
        }
        if (playersDefined > 2) {
            if (playersDefined == 3) {
                for (i = 0; i < 4; i++) {
                    moveThis(colorArr[2][i],position[loadArray[saveIterator + 8 + i].slice(loadArray[saveIterator + 8 + i].indexOf('=') + 1)])
                }
                loadVictoryState = loadArray[saveIterator + 12].slice(loadArray[saveIterator + 12].indexOf('=') + 1)
                if (loadVictoryState == 'true') {
                    loadVictoryState = true
                }
                else if (loadVictoryState == 'false') {
                    loadVictoryState = false
                }
                victoryExists = loadVictoryState
            }
            else if (playersDefined == 4) {
                for (i = 0; i < 4; i++) {
                    moveThis(colorArr[2][i],position[loadArray[saveIterator + 8 + i].slice(loadArray[saveIterator + 8 + i].indexOf('=') + 1)])
                }
                for (i = 0; i < 4; i++) {
                    moveThis(colorArr[3][i],position[loadArray[saveIterator + 12 + i].slice(loadArray[saveIterator + 12 + i].indexOf('=') + 1)])
                }
                loadVictoryState = loadArray[saveIterator + 16].slice(loadArray[saveIterator + 16].indexOf('=') + 1)
                if (loadVictoryState == 'true') {
                    loadVictoryState = true
                }
                else if (loadVictoryState == 'false') {
                    loadVictoryState = false
                }
                victoryExists = loadVictoryState
            }
        }
        else {
            loadVictoryState = loadArray[saveIterator + 8].slice(loadArray[saveIterator + 8].indexOf('=') + 1)
            if (loadVictoryState == 'true') {
                loadVictoryState = true
            }
            else if (loadVictoryState == 'false') {
                loadVictoryState = false
            }
            victoryExists = loadVictoryState
        }
        playernumber.innerHTML = "Player " + (currentPlayer + 1)
        resizeFix()
        if (playersDefined == 2) {
            hasVictory[2] = true
            hasVictory[3] = true
        }
        if (playersDefined == 3) {
            hasVictory[3] = true
        }
        alert('Game loaded.')
    }
    else {
        loadTest = prompt('Please enter save string')
        if (loadTest == null) {
            return
        }
        loadGameState(loadTest)
    }
}

function resizeBoard() {
    if (window.innerHeight <= 100) {//crashes under 100px, this should fix that
        resizeFix()
        return
    }
    if (findHeight(board) == 900 && (document.documentElement.scrollHeight - document.documentElement.clientHeight) == 0) {
        resizeFix()
        return
    }
    for (i = 0; i < 4; i++) {
        green[i].style.display = "none"
        blue[i].style.display = "none"
        red[i].style.display = "none"
        yellow[i].style.display = "none"
    }
    board.style.height = '900px'
    while ((document.documentElement.scrollHeight - document.documentElement.clientHeight) > 0) {
        board.style.height = `${findHeight(board) - 1}px`
    }
    pieceWidth = findWidth(board) * (4/75)
    dieWidth = findWidth(board) * (4/45)
    for (i = 0; i < 4; i++) {
        if (greenPlayer.length) {
            green[i].style.display = "block"
        }
        if (bluePlayer.length) {
            blue[i].style.display = "block"
        }
        if (redPlayer.length) {
            red[i].style.display = "block"
        }
        if (yellowPlayer.length) {
            yellow[i].style.display = "block"
        }
    }
    resizeFix()
}

//position-getting functions
function topEdge(elementToFind) {
    return elementToFind.getBoundingClientRect().top + window.scrollY
}

function bottomEdge(elementToFind) {
    return elementToFind.getBoundingClientRect().bottom + window.scrollY
}

function leftEdge(elementToFind) {
    return elementToFind.getBoundingClientRect().left + window.scrollX
}

function rightEdge(elementToFind) {
    return elementToFind.getBoundingClientRect().right + window.scrollX
}

function centerY(elementToFind) {
    return (elementToFind.getBoundingClientRect().bottom + elementToFind.getBoundingClientRect().top)/2 + window.scrollY
}

function centerX(elementToFind) {
    return (elementToFind.getBoundingClientRect().right + elementToFind.getBoundingClientRect().left)/2 + window.scrollX
}

function findHeight(elementToFind) {
    return (bottomEdge(elementToFind) - topEdge(elementToFind))
}

function findWidth(elementToFind) {
    return (rightEdge(elementToFind) - leftEdge(elementToFind))
}

function moveThis(pieceToMove, fullPosition) {
    pieceToMove.style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(pieceToMove) - centerY(pieceToMove)) + (board.getBoundingClientRect().height * fullPosition.y)}px`
    pieceToMove.style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(pieceToMove) - centerX(pieceToMove)) + (board.getBoundingClientRect().width * fullPosition.x)}px`
    if (typeof pieceToMove.position != 'undefined') {
        pieceToMove.position.piece.splice(pieceToMove.position.piece.indexOf(pieceToMove),1)
    }
    pieceToMove.position = fullPosition
    fullPosition.piece.push(pieceToMove)
    if (fullPosition.number < 16) {
        pieceToMove.isInHome = true
    }
    else {
        pieceToMove.isInHome = false
    }
}

function resetForms() { //self-explanatory
    for (i = 0; i < 5; i++) {
        form[i].reset()
    }
}

function submit1(players) { //shows color selection forms
    colorsubmit.style.display = "block"
    for (i = 1; i < 5; i++) { //resets all forms so there's no overlap if user selected a higher number previously
        form[i].reset()
        form[i].style.display = "none"
    }
    for (i = 1; i <= players; i++) {
        form[i].style.display = "block"
    }
}

function resizeGreensToHome() {
    for (i = 0; i < 4; i++) {
        green[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(green[i]) - centerY(green[i])) + (board.getBoundingClientRect().height * position[i].y)}px`
        green[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(green[i]) - centerX(green[i])) + (board.getBoundingClientRect().width * position[i].x)}px`
        green[i].position = position[i]
        if (!position[i].piece.includes(green[i])) {
            position[i].piece.push(green[i])
        }
        green[i].isInHome = true
    }
}

function putGreensInHome() {
    for (i = 0; i < 4; i++) {
        green[i].style.position = "absolute"
    }
    resizeGreensToHome()
    for (i = 0; i < 4; i++) { //keep them hidden until they're positioned to avoid moving the board
        green[i].style.display = "block"
    }
}

function resizeBluesToHome() {
    for (i = 0; i < 4; i++) {
        blue[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(blue[i]) - centerY(blue[i])) + (board.getBoundingClientRect().height * position[i+4].y)}px`
        blue[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(blue[i]) - centerX(blue[i])) + (board.getBoundingClientRect().width * position[i+4].x)}px`
        blue[i].position = position[i + 4]
        if (!position[i + 4].piece.includes(blue[i])) {
            position[i + 4].piece.push(blue[i])
        }
        blue[i].isInHome = true
    }
}

function putBluesInHome() {
    for (i = 0; i < 4; i++) {
        blue[i].style.position = "absolute"
    }
    resizeBluesToHome()
    for (i = 0; i < 4; i++) {
        blue[i].style.display = "block"
    }
}

function resizeRedsToHome() {
    for (i = 0; i < 4; i++) {
        red[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(red[i]) - centerY(red[i])) + (board.getBoundingClientRect().height * position[i+8].y)}px`
        red[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(red[i]) - centerX(red[i])) + (board.getBoundingClientRect().width * position[i+8].x)}px`
        red[i].position = position[i + 8]
        if (!position[i + 8].piece.includes(red[i])) {
            position[i + 8].piece.push(red[i])
        }
        red[i].isInHome = true
    }
}

function putRedsInHome() {
    for (i = 0; i < 4; i++) {
        red[i].style.position = "absolute"
    }
    resizeRedsToHome()
    for (i = 0; i < 4; i++) {
        red[i].style.display = "block"
    }
}

function resizeYellowsToHome() {
    for (i = 0; i < 4; i++) {
        yellow[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(yellow[i]) - centerY(yellow[i])) + (board.getBoundingClientRect().height * position[i+12].y)}px`
        yellow[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(yellow[i]) - centerX(yellow[i])) + (board.getBoundingClientRect().width * position[i+12].x)}px`
        yellow[i].position = position[i + 12]
        if (!position[i + 12].piece.includes(yellow[i])) {
            position[i + 12].piece.push(yellow[i])
        }
        yellow[i].isInHome = true
    }
}

function putYellowsInHome() {
    for (i = 0; i < 4; i++) {
        yellow[i].style.position = "absolute"
    }
    resizeYellowsToHome()
    for (i = 0; i < 4; i++) {
        yellow[i].style.display = "block"
    }
}

function resizeDie() {
    die0.style.width = dieWidth + 'px'
    die0.style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(die0) - centerY(die0)) + (board.getBoundingClientRect().height * 0.5)}px`
    die0.style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(die0) - centerX(die0)) + (board.getBoundingClientRect().width * 0.5)}px`
}

function showDie() { //positions the die on the board
    die0.style.position = "absolute"
    resizeDie()
    die0.style.display = "block"
    resizeDie()
}

function initialize() { //sets up the board
    setup1.style.display = "none"
    setup2.style.display = "none"
    boardcontainer.style.display = "flex"
    if (greenPlayer.length == 1) {
        putGreensInHome()
        resizeGreensToHome()
    }
    if (bluePlayer.length == 1) {
        putBluesInHome()
        resizeBluesToHome()
    }
    if (redPlayer.length == 1) {
        putRedsInHome()
        resizeRedsToHome()
    }
    if (yellowPlayer.length == 1) {
        putYellowsInHome()
        resizeYellowsToHome()
    }
    showDie()
    playernumber.innerHTML = 'Player 1'
    currentPlayer = 0
    resizeAll()
    if (playersDefined == 2) {
        hasVictory[2] = true
        hasVictory[3] = true
    }
    if (playersDefined == 3) {
        hasVictory[3] = true
    }
}

function switchTurns(skipNext) {
    if (skipNext == 1) {
        if (currentPlayer == playersDefined - 2) {
            currentPlayer = 0
        }
        else if (currentPlayer == playersDefined - 1) {
            currentPlayer = 1
        }
        else {
            currentPlayer += 2
        }
        playernumber.innerHTML = "Player " + (currentPlayer + 1)
        return
    }
    if (currentPlayer == playersDefined - 1) {
        currentPlayer = 0
    }
    else {
        currentPlayer++
    }
    playernumber.innerHTML = "Player " + (currentPlayer + 1)
}

function clearColors() { //used to reset color arrays after a failed submission of color selection form
    greenPlayer = []
    bluePlayer = []
    redPlayer = []
    yellowPlayer = []
}

function pushColor() {
    if (form[i].childNodes[(a * 4)-1].value == "green") {
        greenPlayer.push(i)
    }
    else if (form[i].childNodes[(a * 4)-1].value == "blue") {
        bluePlayer.push(i)
    }
    else if (form[i].childNodes[(a * 4)-1].value == "red") {
        redPlayer.push(i)
    }
    else if (form[i].childNodes[(a * 4)-1].value == "yellow") {
        yellowPlayer.push(i)
    }
}

function submitColors() { //submits color selection form and checks for overlap
    playersDefined = parseInt(form0.players.value)
    playersParsed = 0
    for (i = 1; i <= playersDefined; i++) {
        for (a = 1; a <= 4; a++) {
            if (form[i].childNodes[(a * 4)-1].checked) {
                pushColor()
                playersParsed++
            }
        }
    }
    if (greenPlayer.length > 1) {
        alert("Only one player may use each color")
        for (i = 1; i <= playersDefined; i++) {
            form[i].reset()
        }
        clearColors()
    }
    else if (bluePlayer.length > 1) {
        alert("Only one player may use each color")
        for (i = 1; i <= playersDefined; i++) {
            form[i].reset()
        }
        clearColors()
    }
    else if (redPlayer.length > 1) {
        alert("Only one player may use each color")
        for (i = 1; i <= playersDefined; i++) {
            form[i].reset()
        }
        clearColors()
    }
    else if (yellowPlayer.length > 1) {
        alert("Only one player may use each color")
        for (i = 1; i <= playersDefined; i++) {
            form[i].reset()
        }
        clearColors()
    }
    else if (playersParsed < playersDefined) {
        alert('All players must select a color')
        for (i = 1; i <= playersDefined; i++) {
            form[i].reset()
        }
        clearColors()
    }
    else {
        user[0].color = form1.player1.value
        user[1].color = form2.player2.value
        user[2].color = form3.player3.value
        user[3].color = form4.player4.value
        for (i = 0; i < playersDefined; i++) {
            colorArr[i] = window[user[i].color]//clever way of getting around eval()
        }
        initialize()
    }
}

function debugSubmitColors() {
    playersDefined = 4
    bluePlayer.push(1)
    greenPlayer.push(2)
    redPlayer.push(3)
    yellowPlayer.push(4)
    user[0].color = "blue"
    user[1].color = "green"
    user[2].color = "red"
    user[3].color = "yellow"
    for (i = 0; i < playersDefined; i++) {
        colorArr[i] = window[user[i].color]
    }
    initialize()
}

function allHome(num) {
    if (num == 'green') {
        if (position[32].piece.length > 0) {
            if (position[32].piece[0].color == 'green') {
                return false
            }
        }
        for (i = 0; i < 4; i++) {
            if (!green[i].isInHome) {
                return false;
            }
        }
        return true;
    }
    if (num == 'blue') {
        if (position[62].piece.length > 0) {
            if (position[62].piece[0].color == 'blue') {
                return false
            }
        }
        for (i = 0; i < 4; i++) {
            if (!blue[i].isInHome) {
                return false;
            }
        }
        return true;
    }
    if (num == 'red') {
        if (position[52].piece.length > 0) {
            if (position[52].piece[0].color == 'red') {
                return false
            }
        }
        for (i = 0; i < 4; i++) {
            if (!red[i].isInHome) {
                return false;
            }
        }
        return true;
    }
    if (num == 'yellow') {
        if (position[42].piece.length > 0) {
            if (position[42].piece[0].color == 'yellow') {
                return false
            }
        }
        for (i = 0; i < 4; i++) {
            if (!yellow[i].isInHome) {
                return false;
            }
        }
        return true;
    }
}

function checkSelfDestruct(pieceTest) {
    if (position[handleOverflow(pieceTest)].piece.length > 0) {
        if (position[handleOverflow(pieceTest)].piece[0].color != pieceTest.color) {
            return false
        }
        else {
            return true
        }
    }
    else {
        return false
    }
}

function checkSkipFinish(pieceTest) {
    if (pieceTest.color == 'green' && pieceTest.position.number + numberRolled > 75) {
        return true;
    }
    if (pieceTest.color == 'blue') {
        if (pieceTest.position.number < 62 && pieceTest.position.number + numberRolled > 65) {
            return true;
        }
    }
    if (pieceTest.color == 'red') {
        if (pieceTest.position.number < 52 && pieceTest.position.number + numberRolled > 55) {
            return true;
        }
    }
    if (pieceTest.color == 'yellow') {
        if (pieceTest.position.number < 42 && pieceTest.position.number + numberRolled > 45) {
            return true;
        }
    }
    return false;
}

function checkSDHome(pieceTest) {
    if (position[properties[pieceTest.clrNum].startPosition].piece.length > 0) {
        if (position[properties[pieceTest.clrNum].startPosition].piece[0].color == pieceTest.color) {
            return false;
        }
    }
    return true;
}

function checkSDFinish(pieceTest) {
    if (pieceTest.color == 'green' && pieceTest.position.number + numberRolled > 71) {
        if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece.length > 0) {
            if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece[0].color == pieceTest.color) {
                return true;
            }
        }
    }
    if (pieceTest.color == 'blue') {
        if (pieceTest.position.number < 62 && pieceTest.position.number + numberRolled > 61) {
            if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece.length > 0) {
                if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece[0].color == pieceTest.color) {
                    return true;
                }
            }
        }
    }
    if (pieceTest.color == 'red') {
        if (pieceTest.position.number < 52 && pieceTest.position.number + numberRolled > 51) {
            if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece.length > 0) {
                if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece[0].color == pieceTest.color) {
                    return true;
                }
            }
        }
    }
    if (pieceTest.color == 'yellow') {
        if (pieceTest.position.number < 42 && pieceTest.position.number + numberRolled > 41) {
            if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece.length > 0) {
                if (position[(pieceTest.position.number + numberRolled) - properties[pieceTest.clrNum].finishModifier].piece[0].color == pieceTest.color) {
                    return true;
                }
            }
        }
    }
    return false;
}

function overflowPlayer() {
    if (currentPlayer < (playersDefined - 1)) {
        return (currentPlayer + 1)
    }
    else {
        return 0
    }
}

function turnEnd() {
    let finishCounter = 0
    for (i = 0; i < 4; i++) {
        if ((colorArr[overflowPlayer()][i].position.number >= 16 && (colorArr[overflowPlayer()][i].position.number <= 31))) {
            finishCounter++
        }
    }
    if (finishCounter == 4) {
        isFinished[overflowPlayer()] = true
    }
    else {
        isFinished[overflowPlayer()] = false
    }
    let finishCounter2 = 0
    for (i = 0; i < 4; i++) {
        if ((colorArr[currentPlayer][i].position.number >= 16 && (colorArr[currentPlayer][i].position.number <= 31))) {
            finishCounter2++
        }
    }
    if (finishCounter2 == 4 && !hasVictory[currentPlayer]) {
        hasVictory[currentPlayer] = true
    }
    if (finishCounter2 != 4) {
        hasVictory[currentPlayer] = false
    }
    if (finishCounter2 == 4 && !victoryExists) {
        alert(`Player ${currentPlayer + 1} wins! The game may still be played from this point with the winner's turns skipped.`)
        victoryExists = true
    }
    if (numberRolled == 6) {
        disableAllPieces()
        clearAnimations()
        die0.onclick = rollDice
        die0.style.cursor = 'pointer'
        return
    }
    disableAllPieces()
    clearAnimations()
    let turnSwitch = 0
    if (isFinished[overflowPlayer()]) {
        turnSwitch = 1
    }
    if (!isFinished[0] || !isFinished[1] || !isFinished[2] || !isFinished[3]) {
        die0.onclick = rollDice
        die0.style.cursor = 'pointer'
        savegame.disabled = false
        loadgame.disabled = false
    }
    else {
        alert('Thanks for playing!')
        return
    }
    switchTurns(turnSwitch)
}

function sendToHome(pieceToKeep) {
    for (i = 0; i < pieceToKeep.position.piece.length; i++) {
        if (pieceToKeep.position.piece[i] != pieceToKeep) {
            var pieceToThrow = pieceToKeep.position.piece[i]
        }
    }
    if (pieceToThrow.color == 'green') {
        for (i = 0; i < 4; i++) {
            if (position[0 + i].piece.length == 0) {
                throwLocation = 0 + i
            }
        }
    }
    else if (pieceToThrow.color == 'blue') {
        for (i = 0; i < 4; i++) {
            if (position[4 + i].piece.length == 0) {
                throwLocation = 4 + i
            }
        }
    }
    else if (pieceToThrow.color == 'red') {
        for (i = 0; i < 4; i++) {
            if (position[8 + i].piece.length == 0) {
                throwLocation = 8 + i
            }
        }
    }
    else if (pieceToThrow.color == 'yellow') {
        for (i = 0; i < 4; i++) {
            if (position[12 + i].piece.length == 0) {
                throwLocation = 12 + i
            }
        }
    }
    moveThis(pieceToThrow,position[throwLocation])
    pieceToThrow.isInHome = true
}

function movePiece(pieceToMove) {
    if (pieceToMove.enabled) {
        if (pieceToMove.isInHome) {
            moveThis(pieceToMove, position[properties[pieceToMove.clrNum].startPosition])
            pieceToMove.isInHome = false
        }
        else {
            if (pieceToMove.color == 'green') {
                if (pieceToMove.position.number > properties[pieceToMove.clrNum].endPosition - 6) {
                    if (pieceToMove.position.number + numberRolled > properties[pieceToMove.clrNum].endPosition) {
                        moveThis(pieceToMove,position[pieceToMove.position.number + numberRolled - properties[pieceToMove.clrNum].finishModifier])
                    }
                    else {
                        moveThis(pieceToMove,position[handleOverflow(pieceToMove)])
                    }
                    turnEnd()
                    return;
                }
            }
            if ((pieceToMove.position.number < properties[pieceToMove.clrNum].startPosition) && (pieceToMove.position.number > properties[pieceToMove.clrNum].endPosition - 6)) {
                if (pieceToMove.position.number + numberRolled > properties[pieceToMove.clrNum].endPosition) {
                    moveThis(pieceToMove,position[pieceToMove.position.number + numberRolled - properties[pieceToMove.clrNum].finishModifier])
                }
                else {
                    moveThis(pieceToMove,position[handleOverflow(pieceToMove)])
                }
            }
            else {
                moveThis(pieceToMove,position[handleOverflow(pieceToMove)])
            }
        }
        if (pieceToMove.position.piece.length > 1) {
            sendToHome(pieceToMove) //sounds misleading. pieceToMove is being passed as the piece to NOT move
        }
        turnEnd()
    }
}

function expand(expandee) {
    expandee.style.width = `${findWidth(expandee) + 1}px`
    resizeMe(expandee)
}

function contract(contractee) {
    contractee.style.width = `${findWidth(contractee) - 1}px`
    resizeMe(contractee)
}

function animateThis(thingToAnimate) {
    let animTracker = true
    animVars.push(setInterval(function(){
        if (findWidth(thingToAnimate) < (pieceWidth * 1.25) && animTracker == true) {
            expand(thingToAnimate)
            return;
        }
        else if (findWidth(thingToAnimate) > pieceWidth && animTracker == false) {
            contract(thingToAnimate)
            return;
        }
        animTracker = !animTracker
    },40))
}

function clearAnimations() {
    for (i = 0; i < animVars.length; i++) {
        clearInterval(animVars[i])
    }
    for (i = 0; i < 4; i++) {
        colorArr[currentPlayer][i].style.width = pieceWidth + 'px'
        resizeMe(colorArr[currentPlayer][i])
    }
}

function handleOverflow(pieceTest) {
    if (pieceTest.position.number + numberRolled > 71) {
        return (pieceTest.position.number + numberRolled - 40)
    }
    else {
        return (pieceTest.position.number + numberRolled)
    }
}

function enablePieces() { //checks which pieces are eligible to move
    if (user[currentPlayer].color == "green") {
        arr = green
    }
    else if (user[currentPlayer].color == "blue") {
        arr = blue
    }
    else if (user[currentPlayer].color == "red") {
        arr = red
    }
    else if (user[currentPlayer].color == "yellow") {
        arr = yellow
    }
    for (i = 0; i < 4; i++) {
        if (arr[i].isInHome) {
            if (numberRolled != 6) {
                arr[i].enabled = false
                //console.log('0')
                continue;
            }
        }
        if (numberRolled == 6 && arr[i].isInHome) {//check if eligible to leave home
            arr[i].enabled = checkSDHome(arr[i])
            //console.log('1')
            continue;
        }
        if (position[handleOverflow(arr[i])].piece.length > 0) {//check if would land on same color
            if (position[handleOverflow(arr[i])].piece[0].color == arr[i].color) {
                arr[i].enabled = false
                //console.log('2')
                continue;
            }
        }
        if (arr[i].position.number < 32 && arr[i].position.number > 15) {//handle finish line
            let overflowPosition = Math.floor(arr[i].position.number/4+1) * 4
            if (arr[i].position.number + numberRolled < overflowPosition) {
                arr[i].enabled = !checkSelfDestruct(arr[i])
                //console.log('3')
                continue;
            }
            else {
                arr[i].enabled = false
                //console.log('4')
                continue;
            }
        }
        if (checkSkipFinish(arr[i])) {//check if would skip the finish line enirely
            arr[i].enabled = false
            //console.log('5')
            continue;
        }
        if (checkSDFinish(arr[i])) {//check if would land on same color in finish
            arr[i].enabled = false
            //console.log('6')
            continue;
        }
        arr[i].enabled = true//if a disable isn't caught from all that, then the piece is enabled. NOT FINISHED YET
        //console.log('7')
    }
    let disabledPieces = 0
    for (i = 0; i < 4; i++) {
        if (!colorArr[currentPlayer][i].enabled) {
            disabledPieces++
        }
    }
    if (disabledPieces == 4) {
        turnEnd()
        return;
    }
    for (i = 0; i < 4; i++) {
        if (arr[i].enabled) {
            arr[i].style.cursor = "pointer"
            animateThis(arr[i])
        }
    }
}

function disableAllPieces() {
    for (i = 0; i < 4; i++) {
        colorArr[currentPlayer][i].enabled = false
        colorArr[currentPlayer][i].style.cursor = "default"
    }
}

function rollDice() { //self-explanatory
    savegame.disabled = true
    loadgame.disabled = true
    die0.onclick = ""
    die0.style.cursor = 'default'
    numberRolled = Math.floor((Math.random() * 6) + 1)
    console.log(`Dice rolled to ${numberRolled}.`)
    let continueAnim = true
    var animateDie = setInterval(function() {
        if (findWidth(die0) < (dieWidth * 1.25) && continueAnim) {
            expand(die0)
            return
        }
        else if (continueAnim) {
            continueAnim = false
            die0.src = "img/die" + numberRolled + ".png"
            contract(die0)
            return
        }
        else if (findWidth(die0) > dieWidth) {
            contract(die0)
            return
        }
        else {
            clearInterval(animateDie)
            enablePieces()
            return
        }
    },10)
}

function debugRollDice(number) {
    die0.onclick = ""
    die0.style.cursor = 'default'
    numberRolled = number
    console.log(`Dice rolled to ${numberRolled}.`)
    let continueAnim = true
    var animateDie = setInterval(function() {
        if (findWidth(die0) < (dieWidth * 1.25) && continueAnim) {
            expand(die0)
            return
        }
        else if (continueAnim) {
            continueAnim = false
            die0.src = "img/die" + numberRolled + ".png"
            contract(die0)
            return
        }
        else if (findWidth(die0) > dieWidth) {
            contract(die0)
            return
        }
        else {
            clearInterval(animateDie)
            enablePieces()
            return
        }
    },10)
}

function resizeMe(thingToResize) {
    if (thingToResize == die0) {
        die0.style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(die0) - centerY(die0)) + (board.getBoundingClientRect().height * 0.5)}px`
        die0.style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(die0) - centerX(die0)) + (board.getBoundingClientRect().width * 0.5)}px`
        return;
    }
    thingToResize.style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(thingToResize) - centerY(thingToResize)) + (board.getBoundingClientRect().height * thingToResize.position.y)}px`
    thingToResize.style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(thingToResize) - centerX(thingToResize)) + (board.getBoundingClientRect().width * thingToResize.position.x)}px`
}

function resizeFix() {
    if (greenPlayer.length) {
        for (i = 0; i < 4; i++) {
            green[i].style.position = 'absolute'
            green[i].style.display = 'block'
            green[i].style.width = pieceWidth + 'px'
            green[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(green[i]) - centerY(green[i])) + (board.getBoundingClientRect().height * green[i].position.y)}px`
            green[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(green[i]) - centerX(green[i])) + (board.getBoundingClientRect().width * green[i].position.x)}px`
        }
    }
    else {
        for (i = 0; i < 4; i++) {
            green[i].style.display = "none"
        }
    }
    if (bluePlayer.length) {
        for (i = 0; i < 4; i++) {
            blue[i].style.position = 'absolute'
            blue[i].style.display = 'block'
            blue[i].style.width = pieceWidth + 'px'
            blue[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(blue[i]) - centerY(blue[i])) + (board.getBoundingClientRect().height * blue[i].position.y)}px`
            blue[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(blue[i]) - centerX(blue[i])) + (board.getBoundingClientRect().width * blue[i].position.x)}px`
        }
    }
    else {
        for (i = 0; i < 4; i++) {
            blue[i].style.display = "none"
        }
    }
    if (redPlayer.length) {
        for (i = 0; i < 4; i++) {
            red[i].style.position = 'absolute'
            red[i].style.display = 'block'
            red[i].style.width = pieceWidth + 'px'
            red[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(red[i]) - centerY(red[i])) + (board.getBoundingClientRect().height * red[i].position.y)}px`
            red[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(red[i]) - centerX(red[i])) + (board.getBoundingClientRect().width * red[i].position.x)}px`
        }
    }
    else {
        for (i = 0; i < 4; i++) {
            red[i].style.display = "none"
        }
    }
    if (yellowPlayer.length) {
        for (i = 0; i < 4; i++) {
            yellow[i].style.position = 'absolute'
            yellow[i].style.display = 'block'
            yellow[i].style.width = pieceWidth + 'px'
            yellow[i].style.top = `${(board.getBoundingClientRect().top + window.scrollY) + (topEdge(yellow[i]) - centerY(yellow[i])) + (board.getBoundingClientRect().height * yellow[i].position.y)}px`
            yellow[i].style.left = `${(board.getBoundingClientRect().left + window.scrollX) + (leftEdge(yellow[i]) - centerX(yellow[i])) + (board.getBoundingClientRect().width * yellow[i].position.x)}px`
        }
    }
    else {
        for (i = 0; i < 4; i++) {
            yellow[i].style.display = "none"
        }
    }
    resizeDie()
}

function resizeAll() {
    resizeBoard()
    resizeFix()
}

window.onresize = resizeAll
