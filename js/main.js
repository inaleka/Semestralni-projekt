const APIKEY = '572dcf998f37c9a7c97cbfeec2eaa00a'

const form = document.querySelector('#form');
const input = document.querySelector('.form__input')


form.onsubmit = submitHandler;

function submitHandler(e){
    e.preventDefault();


    if(!input.value){        
        console.log('Enter city name')
        return
    }
    
    
    console.log(input.value)
    
}