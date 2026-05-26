// capturar o formulario

const formulario = document.getElementById('formulario');

// campos
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const erroNome = document.getElementById('erroNome');


// adicionar evento de envio
formulario.addEventListener('submit',function(event){

    // impede que recarregue a página 
    event.preventDefault();

    if(nome.value === '' ){
        erroNome.innerText = 'O nome é obrigatório';
    }

    if(email.value=== ''){
        erroEmail.innerText = 'O email é obrigatorio';
    }else if(!email.value.inclue('@')){
        erroEmail.innerText = 'Digite um e-mail valido'
    }

    if(senha.value === ''){
        erroSenha.innerText = ' A senha é obrigatoria';
    }else if(senha.value.length <6){
        erroSenha.innerText = 'A senha de ter no mínimo 6 caracteres'
    }
})





