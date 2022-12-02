let principal = document.getElementById("principal");


//FUNÇAO DO BOTAO
let botAdicionar = document.getElementById ("adicionar");
botAdicionar.addEventListener ('click', cadastroTabela);

let tabela= document.getElementById("area_tabela");
let nome = document.getElementById("nome");
let filhos = document.getElementById("num_filhos");
let salario = document.getElementById("salario");

let armazenaDados=[

    {
        nome:"",
        numFilhos: 0, 
        numSalario: 0
    }

]





function cadastroTabela(){

    if(nome.value == ("")){
        alert("NOME NÃO FOI PREENCHIDO");
        return;
    }

    if(filhos.value == ("") || filhos.value < 0 ){
        alert("Campo de numeros de filhos Inválido");
        return;
    }

    if(salario.value === ("") || salario.value < 0){
        alert("Campo do Salário Inválido");
        return;
    }


    let criaLinha = document.createElement("tr");

    criaLinha.innerHTML=`
        <td>${nome.value}</td>
        <td>${filhos.value}</td>
        <td>R$ ${salario.value}</td>
    `
    tabela.appendChild(criaLinha);

    
 
    armazenaDados.nome = nome.value;
    armazenaDados.numFilhos = filhos.value;
    armazenaDados.numSalario = salario.value

    armazenaDados.push(nome)
}


