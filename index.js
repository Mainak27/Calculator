let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText =='DEL'){
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        
        // The Vaues will be in radians

        else if(buttonText== 'sin'){
            screenValue= Math.sin(screenValue);
            screen.value=screenValue;
        }
        else if(buttonText== 'cos'){
            screenValue= Math.cos(screenValue);
            screen.value=screenValue;
        }
        else if(buttonText== 'tan'){
            screenValue= Math.tan(screenValue);
            screen.value=screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

