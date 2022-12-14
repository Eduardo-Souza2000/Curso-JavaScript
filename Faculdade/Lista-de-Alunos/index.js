let tabela ={

    {
        id: 0,
        nome: "eduardo",
        curso: "Engenharia",
        email: 'eduardosouza.foz2014@gmail.com'
    }


}



let pai_tabela = document.getElementById ("tabela");



    let titulo_texto = document.createTextNode (noticias.titulo)
    titulo.appendChild (titulo_texto)

    let descricao = document.createElement("p")
    descricao.className = "noticias-paragrafo"
    let descricao_texto = document.createTextNode (noticias.descricao)
    descricao.appendChild (descricao_texto)


    article.appendChild(titulo)
    article.appendChild(descricao)

    section_elemente.appendChild(article)


function cadastra(){ 
    let linha = document.createElement ("<tr>")
    let coluna = document.createElement ("<td>")
    let coluna_texto = document.createTextNode (tabela.id)


}







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