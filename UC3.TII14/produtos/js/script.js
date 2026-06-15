fetch("assets/jsson/dados.json")

.then(respostas => respostas.json()) 

.then(produtos => {
    let html = '';

    Array.forEach(produtos => {
        console.log(produtos)
        html += `
         <div class="card">
            <img src="images/${produtos.imagem}" alt="">
            <h2>PS5</h2>
            <h4>R$${produtos.preco}</h4>
            <button>Comprar</button>
        </div>

        `
    });
})  

   document.getElementById('cards').innerHTML +=


      