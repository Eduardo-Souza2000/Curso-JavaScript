/*

let section_elemente = document.getElementById ("section");

nomes = ["Azul", "vermelho", "PRETO", "BRANCO"];

tamanho_vetor = nomes.lenght;


for (i=0 ; i <tamanho_vetor ; i++) {

    criar_paragrafo(nomes[i]);
}


function criar_paragrafo(item){

    let paragrafo = document.createElement ("p");
    let texto = document.createTextNode (nomes[i]);
    paragrafo.appendChild (texto);
    section_elemente.appendChild(paragrafo);
}*/

let noticias=[

    {
        titulo: "Brasil ganhou seu primeiro jogo da copa",
        descricao: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, velit vel odio nesciunt ad culpa animi! Expedita quam quae ab, error ut modi sapiente ipsum, facere tempora laudantium magnam aut."
    },

    {
        titulo: "Brasil ganhou seu primeiro jogo da copa",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, velit vel odio nesciunt ad culpa animi! Expedita quam quae ab, error ut modi sapiente ipsum, facere tempora laudantium magnam aut."
    },

    {
        titulo: "Brasil ganhou seu primeiro jogo da copa",
        descricao: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, velit vel odio nesciunt ad culpa animi! Expedita quam quae ab, error ut modi sapiente ipsum, facere tempora laudantium magnam aut."
    }

]

let section_elemente = document.getElementById ("noticias");

let tamanho_noticias = noticias.length;

for (i=0 ; i <tamanho_noticias ; i++) {

    criar_noticias(noticias[i]);
    console.log(noticias[i])
}


function criar_noticias(noticias){

    let article = document.createElement("article")
    article.className = "noticia-article"
    let titulo = document.createElement ("h2")
    titulo.className = "noticia-titulo"
    let titulo_texto = document.createTextNode (noticias.titulo)
    titulo.appendChild (titulo_texto)

    let descricao = document.createElement("p")
    descricao.className = "noticias-paragrafo"
    let descricao_texto = document.createTextNode (noticias.descricao)
    descricao.appendChild (descricao_texto)


    article.appendChild(titulo)
    article.appendChild(descricao)

    section_elemente.appendChild(article)
}