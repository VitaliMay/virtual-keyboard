let abcKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, '', ' ', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 92, 91, 93, '', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, '', '', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, '', '', '', '', '', ' ', '', '', '', '', '']
let codeKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'Backslash', 'BracketLeft', 'BracketRight', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
let funcButtonIndexArr = [13, 14, 28, 40, 41, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62]

// позиция пробела 57 он и так работает 
//let index = [13, 14, 28, 40, 41, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]

console.log(abcKeys.length)
console.log(codeKeyboard.length)



function start(){

  document.querySelector('body').innerHTML += `<main class="main"></main>`;
  document.querySelector('.main').innerHTML = `<h1>Virtual Keyboard</h1>`;
  document.querySelector('.main').innerHTML += `<div class="wrapper-text"></div>`; // обёртка для ввода текста
  document.querySelector('.main').innerHTML += `<div class="keyboard"></div>`;

  let init = '';
  for (let i = 0; i < codeKeyboard.length; i++){

    let addDiv = `<div class="key" data="${codeKeyboard[i]}">` + String.fromCharCode(abcKeys[i]) +'</div>';

    if (i === 13){
      addDiv = `<div class="key add-key" data="${codeKeyboard[i]}">Backspace</div>`;
    }
    if (i === 14){
      addDiv = `<div class="key tab-key" data="${codeKeyboard[i]}">Tab</div>`;
    }
    if (i === 25){
      addDiv = `<div class="key slash-key" data="${codeKeyboard[i]}">${String.fromCharCode(abcKeys[i])}</div>`;
    }
    if (i === 28){
      addDiv = `<div class="key add-key" data="${codeKeyboard[i]}">Caps Lock</div>`;
    }
    if (i === 40){
      addDiv = `<div class="key add-key" data="${codeKeyboard[i]}">Enter</div>`;
    }
    if (i === 41){
      addDiv = `<div class="key shift-key" data="${codeKeyboard[i]}">Shift</div>`;
    }
    if (i === 52){
      addDiv = `<div class="key" data="${codeKeyboard[i]}">Up</div>`;
    }
    if (i === 53){
      addDiv = `<div class="key shift-key--small" data="${codeKeyboard[i]}">Shift</div>`;
    }

    /*формирую нижний ряд клавиатуры*/
    if (i === 54){
      addDiv = `<div class="key shift-key--small" data="${codeKeyboard[i]}">Ctrl</div>`;
    }
    if (i === 55){
      addDiv = `<div class="key" data="${codeKeyboard[i]}">Win</div>`;
    }
    if (i === 56){
      addDiv = `<div class="key" data="${codeKeyboard[i]}">Alt</div>`;
    }
    if (i === 57){
      addDiv = `<div class="key space-key" data="${codeKeyboard[i]}">Space</div>`;
    }
    if (i === 58){
      addDiv = `<div class="key" data="${codeKeyboard[i]}">Alt</div>`;
    }
    if (i === 59){
      addDiv = `<div class="key shift-key--small" data="${codeKeyboard[i]}">Ctrl</div>`;
    }
    if (i === 60){
      addDiv = `<div class="key shift-key--small" data="${codeKeyboard[i]}">Left</div>`;
    }
    if (i === 61){
      addDiv = `<div class="key" data="${codeKeyboard[i]}">Down</div>`;
    }
    if (i === 62){
      addDiv = `<div class="key shift-key--small" data="${codeKeyboard[i]}">Right</div>`;
    }

    init = init + addDiv;
  }

  /*формирую HTML*/

  document.querySelector('.keyboard').innerHTML = init;

}

start()

/* Добавляю область для ввода текста */

//let str = 'EEE' опыты со строкой ввода
let str = '' //опыты со строкой ввода

function text() {
  //document.querySelector('.wrapper-text').innerHTML += `<textarea class="textarea" autofocus accesskey="s"></textarea>`;
  document.querySelector('.wrapper-text').innerHTML += `<textarea class="textarea" type="text" id="text-input" rows="6" cols="70" autofocus></textarea>`;
  //document.querySelector('.wrapper-text').innerHTML += `<textarea class="textarea" value="EEE" id="text-input" rows="6" cols="70" autofocus>${str}</textarea>`;
  //document.querySelector('.wrapper-text').innerHTML += `<textarea class="textarea" id="text-input" rows="6" cols="70" autofocus>${str}</textarea>`;
}

text()

/* пробую сделать, чтобы не можно было возвращаться к вводу с виртуальной клавиатуры*/

let textInput = document.getElementById("text-input"); // это одно и тоже - переделать не успеваю
let textarea = document.querySelector('textarea'); // это одно и тоже - переделать не успеваю

// let cursorStart = textarea.selectionStart;
// let cursorEnd = textarea.selectionEnd;

//textInput.focus();

//let str = document.querySelector('.textarea').innerHTML


/******  работа клавиатуры *******************************************/

let flag = false // отлавливает Shift + Alt
document.onkeydown = (event) => {

  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') flag = true  // отлавливает Shift + Alt
  if (event.code == 'AltLeft' && flag || event.code === 'AltRight' && flag){ // отлавливает Shift + Alt
    flag = false // чтобы сработало только один раз
    console.log('Ура заработало')
  } // отлавливает Shift + Alt

  /* загнал в одну функцию, надо вешать слушатели, но не успеваю */
  document.querySelectorAll('.key').forEach(function (element) {
    element.classList.remove('active')
  })

 
  document.querySelector(`.key[data="${event.code}"]`).classList.add('active');
  textInput.focus();  // чтобы сразу вводило в форму
}


/*******  работа виртуальной клавиатуры    *********************************************************** */

document.querySelectorAll('.keyboard .key').forEach(function (element) {

  element.onclick = function(event){

    document.querySelectorAll('.keyboard .key').forEach(function (element) {

      element.classList.remove('active')
    });

    let code = this.getAttribute('data')
    this.classList.add('active')
    console.log(code)


    let cursorStart = textarea.selectionStart;
    let cursorEnd = textarea.selectionEnd;

    let indexFuncButton = codeKeyboard.indexOf(code)

    if (funcButtonIndexArr.includes(indexFuncButton)){
      console.log(`Начинаются мучения`)
      console.log(`Индекс= ${codeKeyboard.indexOf(code)}`)
      if(indexFuncButton === 13){
        console.log(`Началось`)

      }



    } else {

    /* формирую массив нужных индексов */
    // console.log(`Индекс= ${codeKeyboard.indexOf(code)}`)
    // index.push(codeKeyboard.indexOf(code))
    // console.log(index)

    /* вводит текст в форму */


    let currentText = textarea.value; // нигде не использую
    let letter = `${String.fromCharCode(abcKeys[codeKeyboard.indexOf(code)])}`;
    //textarea.value += letter;

    // let cursorStart = textarea.selectionStart;
    // let cursorEnd = textarea.selectionEnd;

    // console.log(cursorStart)
    // console.log(cursorEnd)

    //textarea.value = textarea.value.setRangeText(letter, cursorStart, cursorEnd, "end")   //не работает

    textarea.value = textarea.value.slice(0, cursorStart) + letter + textarea.value.slice(cursorEnd); //работает но только один раз потом курсор убегает
    textInput.focus();
    textarea.selectionStart = textarea.selectionEnd = cursorEnd + 1 // чтобы курсор не убегал


    }


  }
})






