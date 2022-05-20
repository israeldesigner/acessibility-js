const addAcess = () =>{
    let elements = document.getElementsByTagName('*');
    for (let element of elements) {
      element.classList.add('fnc-acessibility');
    }
}

const getComputedFont = (seletorAcessibility) =>{

    let sizeFont = window.getComputedStyle(seletorAcessibility, null).getPropertyValue('font-size');
    return parseFloat(sizeFont);
}

let cookieFontSize = getCookie('font-size');
console.log(cookieFontSize);
const changeSizeFonts = (seletorAcessibility, aumentar, normal) => {

    for (let i = 0; i < seletorAcessibility.length; i++) {
        const element = seletorAcessibility[i]; 
        let sizeFontCur = 0;

        if (normal) {
            element.style.fontSize = '';
            setCookie('font-size', element.style.fontSize = '');
        } else {        
            if (aumentar){
                sizeFontCur = getComputedFont(element) + 0.5;
            }
            else{
                sizeFontCur = getComputedFont(element) - 0.5;            
            }
            
            element.style.fontSize = sizeFontCur.toString() + 'px'; 
            console.log(element.style.fontSize = sizeFontCur.toString() + 'px');
            setCookie('font-size', element.style.fontSize = sizeFontCur.toString() + 'px');
        }
    } 
}

let acessibilityClass = document.getElementsByClassName('fnc-acessibility');
let increaseFont = document.querySelector('#increase-font');
let decreaseFont = document.querySelector('#decrease-font');
let normalFont = document.querySelector('#normal-font');

window.addEventListener('load', () => {
    increaseFont.addEventListener('click', e => {
        addAcess();
        changeSizeFonts(acessibilityClass, true);
    });

    normalFont.addEventListener('click', e => {
        changeSizeFonts(acessibilityClass, null, true);
    });

    decreaseFont.addEventListener('click', e => {
        addAcess();
        changeSizeFonts(acessibilityClass, false);
    });
})

// const increaseDecreaseFont = () => {

//    // var elementBody = document.querySelector('body');
//     var elementBody = document.querySelector('body');
//     var elementBtnIncreaseFont = document.getElementById('increase-font');
//     var elementBtnDecreaseFont = document.getElementById('decrease-font');
//     var elementBtnNormalFont = document.getElementById('normal-font');
//     var cookieFontSize = getCookie('font-size');

//     // Defini o valor do fontSize, caso não exista o cookie, será atribuído 100%
//     if (cookieFontSize != '') {
//         var fontSize = parseInt(cookieFontSize);
//         elementBody.style.fontSize = fontSize + '%';
//     } else {
//         var fontSize = 100;
//     }


//     var increaseDecrease = 10;


//     // Evento de click para aumentar a fonte
//     elementBtnIncreaseFont.addEventListener('click', function(event) {
//         event.preventDefault()
//         fontSize = fontSize + increaseDecrease;
//         elementBody.style.fontSize = fontSize + '%';
//         console.log(event);
        
//         setCookie('font-size', fontSize);
//     });

//     // Evento de click para diminuir a fonte
//     elementBtnDecreaseFont.addEventListener('click', function(event) {
//         event.preventDefault()
//         fontSize = fontSize - increaseDecrease;
//         elementBody.style.fontSize = fontSize + '%';
//         console.log(event);
//         setCookie('font-size', fontSize);
//     });

//     elementBtnNormalFont.addEventListener('click', function(event){
//         event.preventDefault()
//         var fontSize = 100;
//         fontSize = fontSize;
//         elementBody.style.fontSize = '';
//         setCookie('font-size', fontSize);
//     })
// }