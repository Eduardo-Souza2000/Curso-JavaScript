let principal = document.getElementById("principal");


//FUNÇAO DO BOTAO
let botAdicionar = document.getElementById ("adicionar");
botAdicionar.addEventListener ('click', cadastroTabela);

let tabela= document.getElementById("area_tabela");
let nome = document.getElementById("nome");
let filhos = document.getElementById("num_filhos");
let salario = document.getElementById("salario");



function cadastroTabela(){

    if(nome.value == ("")){
        alert("NOME NÃO FOI PREENCHIDO");
        return;
    }

    if(filhos.value == ("")){
        alert("NUMERO DE FILHOS NÃO FOI PREENCHIDO");
        return;
    }

    if(salario.value === ("")){
        alert("VALOR DO SALÁRIO NÃO FOI PREENCHIDO");
        return;
    }


    let criaLinha = document.createElement("tr");

    criaLinha.innerHTML=`
        <td>${nome.value}</td>
        <td>${filhos.value}</td>
        <td>${salario.value}</td>
    `
    tabela.appendChild(criaLinha);
    
    

}

