const form     = document.getElementById('cadastro');
const campos   = document.querySelectorAll('.obrigatorio');
const mensagem = document.querySelectorAll('.mensagem');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
    campos[index].style.border = '2px solid #ff0000';
    mensagem[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    mensagem[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else{
        removeError(0);
    }  
}

function lastnameValidate(){
    if(campos[1].value.length < 2)
    {
        setError(1);
    }
    else{
        removeError(1);
    }  
}

function emailValidate(){
    if(emailRegex.test(campos[2].value))
    {
        removeError(2);
    }
    else{
        setError(2);
    } 
}

function cidadeValidate(){
    if(campos[3].value.length < 4)
    {
        setError(3);
    }
    else{
        removeError(3);
    }  
}

function ufValidate(){
    if(campos[4].value.length < 2)
    {
        setError(4);
    }
    else{
        removeError(4);
    }  
}

const input = document.querySelector('.mascaracep')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    if (inputlength === 5) {
        input.value += "-"
    }
}
);

const inputName = document.querySelector('.mascaracep');

inputName.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if (keyCode < 48 || keyCode > 57) {
        e.preventDefault();
    }
}
);

const inputUF = document.querySelector('.mascarauf');

inputUF.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
}
);