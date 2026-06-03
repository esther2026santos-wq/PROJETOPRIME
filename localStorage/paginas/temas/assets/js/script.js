const btnTema = document.getElementById('btnTema');

let temaSalvo = localStorage.getItem('tema');

if(temaSalvo){
    document.body.className = temaSalvo;
}else{
    document.body.className = 'claro'
}

function atualizarIIcones(){
    if(document.body.classList.contains('escuro')){
        btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
atualizarIcones();


btnTema.addEventListener('click',() => {

    if(document.body.classList.contains('claro')){
       document.body.className = 'escuro';
       localStorage.setItem('tema', 'escuro');
       btnTema.innerText = "claro"
    }else{
        document.body.className = 'claro';
        localStorage.setItem('tema', 'claro')
        btnTema.innerText = "escuro"
    }
    atualizarIcones();   
})