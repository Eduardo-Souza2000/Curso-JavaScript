/*//ARRAY   //ARRAY    //ARRAY   //ARRAY   //ARRAY    //ARRAY   //ARRAY   //ARRAY    //ARRAY  //ARRAY   //ARRAY    //ARRAY 

let amigos = ['Marcos', 'Joao', 'Amanda', 'Mickelly'];

console.log(amigos);

console.log(amigos[3]);

amigos[0]= 'Marquinhos';

console.log(amigos);*/

/*
//ADICIONANDO VALOR NA ARRAY  //ADICIONANDO VALOR NA ARRAY  //ADICIONANDO VALOR NA ARRAY

const num = [7,8,9];


//adiciona no final do array
num.push(10,15,20);

//adiciona no começo 
num.unshift(56,658,5998);

//adicionando ao meio
num.splice(3,0,89,659,514,235);




console.log (num);

//localizando itens primitivos
console.log (num.indexOf(659))

*/
/*

//ARRAY DE REFERENCIA find

const filmes = [
    {id: 1 , nomeFilme: 'tropa de elite'},
    {id: 2 , nomeFilme: 'Mandando Bala'},
    {id: 3 , nomeFilme: 'Venom'},
]

console.log (filmes);

console.log (filmes.find(function(filme) {
    return filmes.nomeFilme == 'Venom'
}))



//ARRAY DE REFERENCIA find

const filme = [
    {id: 1 , nomeFilme: 'tropa de elite'},
    {id: 2 , nomeFilme: 'Mandando Bala'},
    {id: 3 , nomeFilme: 'Venom'},
]

console.log (filme);

console.log (filme.find(filme => filme.nomeFilme == 'Venom'))

*/
 
//REMOVENDO ITEM PELA ARRAY //REMOVENDO ITEM PELA ARRAY  //REMOVENDO ITEM PELA ARRAY 
const numero = [5,6,7,8];

//funçao que tira o ultimo numero de dentro da array, no caso o numero 8
//const final = numero.pop()

//funçao que tira o primeirp numero de dentro da array, no caso o numero 5
//const final = numero.shift()

//aqui ele fala o seguinte, no index 2 remova 1 item
const final = numero.splice (2,1)


console.log (numero);
console.log(final)