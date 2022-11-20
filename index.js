//Lendo uma paralavra no console do html
//aul 01

/*
console.log ("Hello, Java Script");

//Declaração de Variavel
//Variavel -> declatração
let primeiroNome ='Eduardo';
//Leitura da Variavel
console.log (primeiroNome);

let sobreNome ='Souza';
console.log (sobreNome);

let nomeCarro = 'Fiat Uno Ano 2000';
console.log (nomeCarro);

const valorCorra = '60';
console.log (valorCorra);



//MODELOS DE VARIAVEIS PRIMITIVAS

//Variavel de String
let itemNome = 'String';
console.log(itemNome);

//Variavel de Numero
let itemNumero = '1000';
console.log(itemNumero);

//Variavel de Boleana
let itemBoleano = true;
console.log (itemBoleano);

//Variavel Underfined
let itemColor 
console.log (itemColor);

//Variavel Nula
itemNome = null;
console.log(itemNome);



//VARIAVEIS DE REFERENCIA

/*
    Criando um objeto
    Lembrando que um objeto é um conjunto de informações,
    referentes a uma determinada coisa
*/
/*
//EXEMPLO DE OBJETO

let caneta = {
    nomeItem : 'Caneta',
    numeroItem : 20,
    estoqueItem : true,
    corItem : 'Vermelha'
}

console.log (caneta);

//aqui ele está alterando uma variavel que possui dentro do objeto, no caso a cor era vermelha, passou a ser Branca
caneta.corItem = 'branco';
console.log (caneta);


//ARRAY

//forma que declaramos um array
let amigos = ['Marcos', 'Joao', 'Amanda', 'Poliana'];

//exibindo na tela os nomes do array
console.log (amigos);

//usamos dessa forma para que mostro somente o numero que foi inserido ali da lista na tela
console.log (amigos [3]);

//fazemos dessa forma para trocar o nome do array que queremos, usamos o numero para se referir
amigos[2] = 'Mickelly';
console.log (amigos);

console.log (amigos [2]);

//FUNÇÃO e FUNÇÕES COM PARAMETROS
 
//fução normal sem parametro
function statusProposta() {
    console.log('APROVADO');
}
statusProposta();

//Inserimos o parametro da função 
function statusProposta(status) {
    console.log('Proposta' + status);
}
//inserimos  argumento do parametro a cima
statusProposta('Aprovada');

//Inserimos o parametro da função  PODEMOS TER MAIS DE UM PARAMETRO, QUANTOS NECESSÁRIOS
function statusProposta(status, valor, cor) {
    console.log('Proposta' + status + ' Valor do Bem: '  + valor, 'Cor: ' + cor);
}
//inserimos  argumento dos parametros a cima
statusProposta(' Aprovada', 20000, 'azul');


//FUNÇÕES COM CALCULOS MATEMÁTICOS

function calculePorcentagem (valor) {
    return valor - (valor * 10 / 100)
}
//forma de exibir o valor da tela
let total = calculePorcentagem (100);
console.log (calculePorcentagem (100))

//forma mais facil de exibir o valor na tela
console.log (calculePorcentagem(100));

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Aula 02

//OPERADORES LÓGICOS

let numeroPrimeiro = 20;
let numeroSegundo = 30;

console.log  (numeroPrimeiro + numeroSegundo);
console.log (numeroPrimeiro - numeroSegundo);
console.log (numeroPrimeiro * numeroSegundo);
console.log (numeroPrimeiro / numeroSegundo);

let total = numeroPrimeiro + numeroSegundo;

console.log (total);
console.log (--total);
console.log (++total);