// Faz uma requsição para burcar o arquivo dados.
fetch("dados.json")
   // quando o arquivo for encontrado, convert o conteudo JSON para um objeto/array javascript
      .then(resposta => resposta.json())

      .then(pessoas  => {
        let html = "";
        console.log(pessoas)


        pessoas.forEach(pessoa => {
            html += `
            
            <p>nome: ${pessoa.nome}</p>
            <p>nome: ${pessoa.idade}</p>
            <p>nome: ${pessoa.dados.telefone}</p>
            <p>nome: ${pessoa.dados.email}</p>
            <img src="${pessoa.avatar}">
            <hr>
            `;
        });

        document.body.innerHTML += html
      })

      
