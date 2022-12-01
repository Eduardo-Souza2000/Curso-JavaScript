let principal = document.getElementById("principal");
let cadastro = document.createElement ("article");

cadastro.innerHTML=`
    <input type="text" placeholder="Nome do cidadao" name="Nome" id="nome" value="">
    <input type="number" placeholder="Num. Filhos" name="Filhos" id="num_filhos" value="">
    <input type="number" placeholder="Salario (R$)" name="salario" id="salario" value="">
    <button type="submit" id="adicionar"> Adicionar</button>
`
principal.appendChild(cadastro);

//FUNÇAO DO BOTAO
let botAdicionar = document.getElementById ("adicionar");
botAdicionar.addEventListener ('click', cadastroTabela);

//INICIALIZA A TABELA COM O TITULO
let table = document.getElementById("table");
principal.appendChild(table);


let nome = document.getElementById("nome");

let filhos = document.getElementById("num_filhos");
let numFilhos = Number(filhos.value);

let salario = document.getElementById("salario");




function cadastroTabela(){

    let linhaTabela = document.createElement("tr");
    
    let criaColuna = document.createElement("td");

    let colunaNome = document.createTextNode(nome.value);
    let colunaFilhos = document.createTextNode(filhos.value);
    let colunaSalario = document.createTextNode(salario.value);


    criaColuna.appendChild(colunaNome);
    criaColuna.appendChild(colunaFilhos);
    criaColuna.appendChild(colunaSalario);

    linhaTabela.appendChild(criaColuna);

    table.appendChild(linhaTabela);
    
    principal.appendChild(table);

    calcula;
}

function calcula(){
    let numSalario = Number (salario.value);

    for (tamanhoSalario of numSalario){

    let mediaSalario = numSalario + numSalario[i] ;

    console.log(mediaSalario);
    }
}