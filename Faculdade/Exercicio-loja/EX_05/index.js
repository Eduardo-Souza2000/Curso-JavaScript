let principal = document.getElementById ("principal");

let criaRecebedor = document.createElement ("fieldset");

criaRecebedor.innerHTML=`
    <label>Digite o nome do produto:</label>
    <input type="text" name="Nome do produto" id="nome_produto" value="">

    <label>Digite a quantidade adquirida:</label>
    <input type="number" name="Quantidade" id="quantidade_produto" value="">

    <label>Digite o Preço unitário:</label>
    <input type="number" name="Preço do produto" id="preco_produto" value="">

    <input type="submit" onclick="calculaProcuto()">
`
principal.appendChild(criaRecebedor);


function calculaProcuto(){
    let nomeProduto = document.getElementById("nome_produto");
    let produto = nomeProduto.value;

    let quantidade = document.getElementById ("quantidade_produto");
    let ValorQuantidade = Number (quantidade.value);

    let preco = document.getElementById ("preco_produto");
    let ValorPreco = Number (preco.value)

    if(ValorQuantidade > 5 && ValorQuantidade <= 10){

        let valorTotal = ValorQuantidade * ValorPreco;
        let valorDesconto = valorTotal * 3 / 100
        let total = valorTotal - valorDesconto


        let exibeResutado = document.createElement ("article");

        exibeResutado.innerHTML=`
            <p> O produto: ${produto}</p><br>

            <p> Valor Total: R$ ${valorTotal}</p>

            <p> Valor do Desconto: R$ ${valorDesconto}</p>

            <p> Valor Total a pagar: R$ ${total}</p>
        `

        principal.appendChild(exibeResutado);
        
    } else if (ValorQuantidade > 10){
        let valorTotal = ValorQuantidade * ValorPreco;
        let valorDesconto = valorTotal * 5 / 100
        let total = valorTotal - valorDesconto


        let exibeResutado = document.createElement ("article");

        exibeResutado.innerHTML=`
            <p> O produto: ${produto}</p><br>

            <p> Valor Total: R$ ${valorTotal}</p>

            <p> Valor do Desconto: R$ ${valorDesconto}</p>

            <p> Valor Total a pagar: R$ ${total}</p>
        `

        principal.appendChild(exibeResutado);

    } else{

        let valorTotal = ValorQuantidade * ValorPreco;
        let valorDesconto = valorTotal * 2 / 100
        let total = valorTotal - valorDesconto


        let exibeResutado = document.createElement ("article");

        exibeResutado.innerHTML=`
            <p> O produto: ${produto}</p><br>

            <p> Valor Total: R$ ${valorTotal}</p>

            <p> Valor do Desconto: R$ ${valorDesconto}</p>

            <p> Valor Total a pagar: R$ ${total}</p>
        `

        principal.appendChild(exibeResutado);
    }
    

}
