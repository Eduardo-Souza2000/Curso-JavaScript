let principal = document.getElementById("principal");


//FUNÇAO DO BOTAO
let botAdicionar = document.getElementById ("adicionar");
botAdicionar.addEventListener ('click', cadastroTabela);

let botAtualizar = document.getElementById ("atualizaDados");
botAtualizar.addEventListener ('click', calculo);

let tabela= document.getElementById("area_tabela");
let nome = document.getElementById("nome");
let filhos = document.getElementById("num_filhos");
let salario = document.getElementById("salario");
let exibirResultados = document.getElementById("exibeResultado");

let dadosUser=[];




function cadastroTabela(){

    let caputaraDados = {
        nome:'',
        filhos: 0,
        salario:0
    }

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

    caputaraDados.nome= nome.value;
    caputaraDados.filhos= Number (filhos.value);
    caputaraDados.salario= Number (salario.value);

    dadosUser.push(caputaraDados);

    let criaLinha = document.createElement("tr");

    criaLinha.innerHTML=`
        <td>${caputaraDados.nome}</td>
        <td>${caputaraDados.filhos}</td>
        <td>R$ ${caputaraDados.salario}</td>
    `
    tabela.appendChild(criaLinha);


    calculo();
  
}


function calculo(){

    let mediaSalarial = mediaNumfilhos = maiorSalario = percentualSalario = 0;
    let somaSalarial = somaFilhos= 0;
    let quantiPessoas = dadosUser.length;
    let pessoasRendabaixa = 0;
    
    for(i in dadosUser){

        somaSalarial += dadosUser[i].salario;
        somaFilhos += dadosUser[i].filhos

        if (maiorSalario < dadosUser[i].salario){
            maiorSalario = dadosUser[i].salario
        }

        if (dadosUser[i].salario < 1500){
            ++pessoasRendabaixa
            
        }

    }

    mediaSalarial = somaSalarial / quantiPessoas;

    mediaNumfilhos = somaFilhos / quantiPessoas;

    percentualSalario = pessoasRendabaixa / quantiPessoas;



    exibirResultados.innerHTML= `
        <p>Média de salário da população: ${mediaSalarial.toFixed(2)}</p>
        <p>Média do número de filhos:${mediaNumfilhos}</p>
        <p>Maior salário dos habitantes: ${maiorSalario.toFixed(2)}</p>
        <p>Percentual de pessoas com salario menor que R$ 1.500,00 : ${percentualSalario.toFixed(2) * 100 } %</p>
    `
    
   
}