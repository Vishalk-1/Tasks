let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventlistener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value += screenValue;
            console.log("clicked value is " , buttonText);
        }
       else if(buttonText=='='){
            screen.value= eval(screenValue);
        }
        else if(buttonText=='C'){
            screenValue=" ";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
    )
}


