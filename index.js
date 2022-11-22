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


/*
//OPERADORES LÓGICOS

//declaração das variaveis com nummeros
let numeroPrimeiro = 20;
let numeroSegundo = 30;
//operações tradicionais
console.log  (numeroPrimeiro + numeroSegundo);
console.log (numeroPrimeiro - numeroSegundo);
console.log (numeroPrimeiro * numeroSegundo);
console.log (numeroPrimeiro / numeroSegundo);
//inserindo o valor da primeira variavel + a segunda para variavel total
let total = numeroPrimeiro + numeroSegundo;
//exibindo na tela o valor total
console.log (total);
//exibindo na tela o valor total com decremento
console.log (--total);
//exibindo na tela o valor total com incremento
console.log (++total);
*/


//OPERADOR DE ATRIBUIÇÃO
/*
let numero = 50;
//a operação de baixo é a mesma que numero = numero + 50;
//podemos fazer esse modelo para qualquer tipo de conta, divisão, multiplicação, adição e subtração
numero += 50;
numero -= 90;
numero /= 50;
numero *= 50;
console.log (numero);
*/


//OPERADORES DE COMPARAÇÃO
/*
//inserimos o valor para variavel e logo apos fazemos as comparções
let numero = 5;

console.log (numero > 0);
console.log (numero < 0);
console.log (numero >= 5);
console.log (numero <= 0);

console.log (numero === 6);
console.log (numero != 10);


//A comparação pode ser feita com strings tqambém 
let nome = 'eduardo';

console.log (nome === 'joao');
console.log (nome != 'marcos');
console.log (nome === 'eduardo');
*/

//OPERADORES DE IGUALDADE
/*
let primeiroNumero = 10;
let segundoNumero = 10;

console.log(primeiroNumero === segundoNumero);


let numeroPrimeiro = '10';
let numeroSegundo = 10;
//esse operador compara o tipo da variavel e o valor chamado de STRICT
console.log (numeroPrimeiro === numeroSegundo);
//esse operador compara somente o valor da variavel, chamado de LOSE 
console.log (numeroPrimeiro == numeroSegundo);
*/

//OPERADOR TERNÁRIO
/*
let carro = 90;

let velocidade = carro > 110 ? 'Acima da Velocidade' : 'Velocidade Normal';

console.log (velocidade);

let carros = 190;

let velocidades = carros > 110 ? 'Acima da Velocidade' : 'Velocidade Normal';

console.log (velocidades);
*/

//OPERADOR LÓGICO
/*
let idadeMinima = false;
let tituloEleitor = true;


let podeVota = idadeMinima || tituloEleitor;
console.log ('Pode Votar: ' + podeVota);

let podeViajar = !podeVota;
console.log ('Pode viajar: ' + podeViajar);


let podeVotar = idadeMinima && tituloEleitor;
console.log ('Pode Votar: ' + podeVotar);

let podeViaja = !podeVotar;
console.log ('Pode viajar: ' + podeViaja);
*/

//OPERADOR LÓGICO SELECIONANDO COR
/*
 //let corCliente = 'white';
 let corCliente = undefined;
 let corEstoque = 'Black';

 let corVendida = corCliente || corEstoque;

 console.log (corVendida);
 */

 //PRECEDENCIA DOS OPERADORES
  
 /*

 //FOR IN LOOP
 
 const Carro = {
    modelo: 'fiat',
    ano: '2005',
    km: 135000
 }

 for (let i in Carro){
    console.log(i + ' ' + Carro[i])
 }
 */

 // FOR OF LOOP

 const amigos = ['marcos', 'joao', 'ana'];

 for (let i of amigos){
    console.log(i);
 }

 for (let i in amigos){
    console.log(i);
 }