/*
//PRIMEIRO SELECIONAMOS O PAI
let pai_section = document.getElementById ("section");

//CRIAMOS O ELEMENTO HTML
let filho_p = document.getElementById ("p");

//CRIANOS O ELEMENTO HTML -> TEXTO
let filho_p_texto = document.createTextNode("Texto criado pelo JS");

//RELACIONA O ELEMENTO TEXTO COMO FILHO DA TAG HTML CRIADA <P>
filho_p.appendChild (filho_p_texto);

//RELACIONA A TAG HTML <P> COMO FILHO DA TAG HTML SECTION
pai_section.appendChild(filho_p);
*/

let pai_tabela = document.getElementById ("tabela");
let pai_linha = document.getElementById ("linha-tabel");
let filho_linhaid = document.getElementById ("id");
let filho_linhaNome = document.getElementById ("nome");
let filho_linhaCurso = document.getElementById ("curso");
let filho_linhaEmail = document.getElementById ("email");


/*for ( i=0 ; i < 1 ; i++) {
let Id = document.createTextNode = window.prompt ('digite um id');
let Nome = document.createTextNode = window.prompt ('digite um nome');
let Curso = document.createTextNode = window.prompt ('digite um curso');
let Email = document.createTextNode = window.prompt ('digite um email');
}*/


let Id = document.createTextNode ("2");
let Nome = document.createTextNode("edu");
let Curso = document.createTextNode("administração");
let Email = document.createTextNode("gmail@gmail.com");

pai_linha.appendChild (Node);


filho_linhaid.appendChild (Id);
filho_linhaNome.appendChild (Nome);
filho_linhaCurso.appendChild (Curso);
filho_linhaEmail.appendChild (Email);


pai_linha.appendChild(filho_linhaid);
pai_linha.appendChild (filho_linhaNome);
pai_linha.appendChild (filho_linhaCurso);
pai_linha.appendChild (filho_linhaEmail);


pai_tabela.appendChild(pai_linha);




/*

let aluno = {

    nome:"Rafael",
    curso:"Analise de sistemas",
    email: "admin@gmail.com"
}


console.log (aluno.nome)
console.log (aluno.curso)
console.log (aluno.email)


let alunos = [ 

    { 
        nome:"Rafael",
        curso:"Analise de sistemas",
        email: "admin@gmail.com"
    },

    { 
        nome:"Rafael",
        curso:"Analise de sistemas",
        email: "admin@gmail.com"
    },

    { 
        nome:"Rafael",
        curso:"Analise de sistemas",
        email: "admin@gmail.com"
    }

]

let tamanho_vetor = alunos.length;

for (i=0; i < tamanho_vetor ; i++){
    console.log (alunos[i])
}

for (pessoas of alunos){
    console.log (pessoas);

}

*/