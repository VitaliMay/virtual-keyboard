
let abcKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]

function start(){

  document.querySelector('body').innerHTML += `<main class="main"></main>`;
  document.querySelector('.main').innerHTML = `<h1>Virtual Keyboard</h1>`;
  document.querySelector('.main').innerHTML += `<div class="keyboard"></div>`;

  let init = '';
  for (let i = 0; i < abcKeys.length; i++){

    if (i === 13){
      init += '<div class="add-key">Backspace</div>'
      init += '<div class="tab-key">Tab</div>'
    }
    if (i === 25){
      init += '<div class="key slash-key"  data="' + 92 + '">' + String.fromCharCode(92) +'</div>'
      init += '<div class="add-key">Caps Lock</div>'
    }
    if (i === 36){
      init += '<div class="add-key">Enter</div>'
      init += '<div class="shift-key">Shift</div>'
    }

    init = init + '<div class="key" data="' + abcKeys[i] + '">' + String.fromCharCode(abcKeys[i]) +'</div>';
  }

  init += '<div class="key">Arrow</div>'
  init += '<div class="key shift-key--small">Shift</div>'

  /*формирую нижний ряд клавиатуры*/

  init = init + '<div class="key shift-key--small">Ctrl</div>'
  init = init + '<div class="key">Win</div>'
  init = init + '<div class="key">Alt</div>'
  init = init + '<div class="key space-key">Space</div>'
  init = init + '<div class="key">Alt</div>'
  init = init + '<div class="key shift-key--small">Ctrl</div>'
  init = init + '<div class="key shift-key--small">Arrow</div>'
  init = init + '<div class="key">Arrow</div>'
  init = init + '<div class="key shift-key--small">Arrow</div>'

  /*формирую HTML*/

  document.querySelector('.keyboard').innerHTML = init;

}

start()


document.onkeypress = (event) => {

  document.querySelectorAll('.key').forEach(function (element) {
    element.classList.remove('active')
  })
  document.querySelector('.key[data="'+ event.charCode +'"]').classList.add('active');

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



/* помогает сформировать массив charCode клавиш*/
// document.onkeypress = function(event){
//   // console.log(event)
//   abcKeys.push(event.charCode)
//   console.log(abcKeys)
// }



