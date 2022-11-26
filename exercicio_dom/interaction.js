let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }

]

/*

for (let lista of ITENS_LOJA) {
    console.log (lista)
    exibe_tela(lista)
}*/
/*
function exibe_tela(lista){
    let pai_section = document.getElementById ("lista_icones");

    let cria_elemento = document.createElement ("article");
    cria_elemento.className = "retangulo";
    cria_elemento.innerHTML = `
        <img src=${lista.url_img}>   
        <p class="titulo"> ${lista.nome} </p>
        <article1 class="preco">
            <p class="preco_texto"> Preço:</p>
            <p class="preco_valor"> R$ ${lista.preco}</p>
        </article1>
        <article class="descricao">
            <p class="descricao_titulo">Descrição:</p>
            <p class="descricao_texto">${lista.descricao}</p>
        </article>  `

    pai_section.appendChild (cria_elemento);

}
*/


let tamanho = ITENS_LOJA.length;

for (i=0 ; i < tamanho ; i++){
    
    exibir (ITENS_LOJA[i]);
    console.log(ITENS_LOJA[i])
}

function exibir (ITENS_LOJA) {
    let pai_todos = document.getElementById ("sessao-venda");

    let cria_secao = document.getElementById ("lista_icones"); 

    let criar_retangulo = document.createElement ("article");
    criar_retangulo.className = "retangulo";

    let cria_img = document.createElement ("img");
    cria_img.setAttribute("src",ITENS_LOJA.url_img);
   

    let cria_titulo = document.createElement ("p");
    cria_titulo.className = "titulo";
    let cria_titulo_lista = document.createTextNode(ITENS_LOJA.nome);

    let cria_preco = document.createElement ("article");
    cria_preco.className = "preco";

    let texto_preco = document.createElement ("p");
    texto_preco.className = "preco_texto";
    let texto_preco_pronto = document.createTextNode("Preço: ");

    let texto_valor = document.createElement ("p");
    texto_valor.className = "preco_valor";
    let texto_valor_lista = document.createTextNode("R$: " + ITENS_LOJA.preco);

    let descricao = document.createElement ("article");
    descricao.className = "descricao";

    let texto_descricao = document.createElement ("p");
    texto_descricao.className = "descricao_titulo";
    let texto_descricao_pronta = document.createTextNode(" Descrição: ");

    let texto_descricao_lista = document.createElement ("p");
    texto_descricao_lista.className = "descricao_text";
    let texto_descricao_lista_inserido = document.createTextNode(ITENS_LOJA.descricao);


    pai_todos.appendChild (cria_secao);

    cria_secao.appendChild (criar_retangulo);

    criar_retangulo.appendChild (cria_img);
    criar_retangulo.appendChild (cria_titulo);
    criar_retangulo.appendChild (cria_preco);
    criar_retangulo.appendChild (descricao);

    cria_titulo.appendChild(cria_titulo_lista);

    cria_preco.appendChild (texto_preco);
    cria_preco.appendChild (texto_valor);
    texto_preco.appendChild (texto_preco_pronto);
    texto_valor.appendChild (texto_valor_lista);

    descricao.appendChild (texto_descricao);
    descricao.appendChild (texto_descricao_lista);
    texto_descricao.appendChild(texto_descricao_pronta);
    texto_descricao_lista.appendChild (texto_descricao_lista_inserido);

}
