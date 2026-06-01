// capturar o formulario

const formulario = document.getElementById('formulario');

// campos
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');


const mensagem = document.getElementById('mensagem');


// adicionar evento de envio
formulario.addEventListener('submit',function(event){

    // impede que recarregue a página 
    event.preventDefault();

    erroNome.innerText = ""
    erroEmail.innerText = "";
    erroSenha.innerText = "";

    let formularioValido = true;


    if(nome.value === '' ){
        erroNome.innerText = 'O nome é obrigatório';
        formularioValido = false;
    }

    if(email.value === ''){
        erroEmail.innerText = 'O email é obrigatorio';
        formularioValido = false;
    }

    else if(!email.value.includes('@')){
        erroEmail.innerText = 'Digite um e-mail valido'
        formularioValido = false;
    }

    if(senha.value === ''){
        erroSenha.innerText = ' A senha é obrigatoria';
          formularioValido = false;
    }else if(senha.value.length <6){
        erroSenha.innerText = 'A senha de ter no mínimo 6 caracteres'
          formularioValido = false;
    }

    if(formularioValido === true){
        mensagem.innerText = "Cadastro realizado com sucesso"

        mensagem.classList.add('sucesso');

        
    //setTimeout(() => {
        //mensagem.innerText = "";
        //mensagem.classList.remove('sucesso')
    //},3000); //3000 ms = 3 segundos

    const intervalo = setInterval(() => {
        mensagem.innerText = "";
        mensagem.classList.remove('sucesso');
        clearInterval(intervalo) // para o intervalo execução
    },3000)

    }

})

    






