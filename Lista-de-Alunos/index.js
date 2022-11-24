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