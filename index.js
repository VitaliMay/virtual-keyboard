
let abcKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, '', '', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 92, 91, 93, '', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, '', '', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, '', '', '', '', '', '', '', '', '', '', '']
let codeKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'Backslash', 'BracketLeft', 'BracketRight', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

console.log(abcKeys.length)
console.log(codeKeyboard.length)



function start(){

  document.querySelector('body').innerHTML += `<main class="main"></main>`;
  document.querySelector('.main').innerHTML = `<h1>Virtual Keyboard</h1>`;
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

let flag = false // отлавливает Shift + Alt
document.onkeydown = (event) => {

  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') flag = true  // отлавливает Shift + Alt
  if (event.code == 'AltLeft' && flag || event.code === 'AltRight' && flag){ // отлавливает Shift + Alt
    flag = false // чтобы сработало только один раз
    console.log('Ура заработало')} // отлавливает Shift + Alt

    document.querySelectorAll('.key').forEach(function (element) {
    element.classList.remove('active')
  })

  document.querySelector(`.key[data="${event.code}"]`).classList.add('active');

}



document.querySelectorAll('.keyboard .key').forEach(function (element) {

  element.onclick = function(event){
    document.querySelectorAll('.keyboard .key').forEach(function (element) {

      element.classList.remove('active')
    });

    let code = this.getAttribute('data')
    this.classList.add('active')
    console.log(code)

  }
})




