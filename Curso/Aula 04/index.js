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
 

/*
//REMOVENDO ITEM PELA ARRAY //REMOVENDO ITEM PELA ARRAY  //REMOVENDO ITEM PELA ARRAY 
const numero = [5,6,7,8];

//funçao que tira o ultimo numero de dentro da array, no caso o numero 8
//const final = numero.pop()

//funçao que tira o primeirp numero de dentro da array, no caso o numero 5
//const final = numero.shift()

//aqui ele fala o seguinte, no index 2 remova 1 item
//aqui ele fala remova o item a partir de:   / depois a quantidade que quer remover
const final = numero.splice (2,1)


console.log (numero);
console.log(final)
*/

/*
//COMO ZERAR UMA ARRAY  //COMO ZERAR UMA ARRAY  //COMO ZERAR UMA ARRAY 

let num = [5,6,7,8]

//num = [];
//num.length = 0;
//remova do index zero at´´e o tamanho maximo da array
//num.splice (0,num.length);

console.log (num);
*/
/*
//CONCATENAR UMA ARRAY  //CONCATENAR UMA ARRAY  //CONCATENAR UMA ARRAY  //CONCATENAR UMA ARRAY

let num = [5,6,7,8];
let letras = ['a', 'b', 'c'];

let todos = num.concat(letras);

//fala onde vai começar , onde vai terminar antes do 5 no caso
let metade = todos.splice(3,5);

console.log (todos);

console.log (metade);

*/
/*
//JOIN ARRAY //JOIN ARRAY  //JOIN ARRAY  //JOIN ARRAY  //JOIN ARRAY 

let clientes = ['andre','jose','marcela'];
console.log (clientes);

//dentro dos parenteses eu coloco o que precisa ser adcionado
let clientesJoin = clientes.join (',');

console.log (clientesJoin);
*/

/*
//ORGANIZANDO AS ARRAY

let clientes = ['eduardo', 'mickelly', 'samir', 'tailyne', 'joao'];
console.log (clientes);

clientes.sort();

console.log (clientes);

clientes.reverse();
console.log (clientes);
*/

 /*
//VERIFICA ELENMENTOS DA ARRAY - EVERY //VERIFICA ELESMENTOS DA ARRAY - EVERY  //VERIFICA ELESMENTOS DA ARRAY - EVERY 
//AQUI ELE EXIBE SOMENTE TRUE OU FALSE
const tempLondres = [18,13,8,-9];

const tempPositiva = tempLondres.every(function(value){
    return value >= 0;
});

console.log (tempPositiva);

*/
/*

//VERIFICA ELENMENTOS DA ARRAY - FILTER //VERIFICA ELESMENTOS DA ARRAY - FILTER  //VERIFICA ELESMENTOS DA ARRAY - FILTER 
//AQUI ELE EXIBE OS NUMEROS POSITIVOS NA TELA 

const tempLondres = [18,13,8,-9];

const tempPositiva = tempLondres.filter(function(value){
    return value >= 0;
});

//DUAS FORMAS DE FAZER
//const tempPositiva = tempLondres.filter(value => value >= 0);

console.log (tempPositiva);
*/