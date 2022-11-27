/*
//Variaveis Relacionadas

let livroTitulo = 'O cortiço';
let livroAutor = 'Manoel de Oliveira';
let livroPaginas = 306;

*/

/*

//OBJETO COM FUNÇÃO DENTRO
const livro = {

    livroTitulo: 'O cortiço',
    livroAutor: 'Manoel de Oliveira',
    livroPaginas: 306,
    livroCaptulo: {
        cap1: 'Fundamentos',
        cap2: 'Primeiro',
        cap3: 'terceiro'
    },

    exibeLivro: function (){
        console.log ('Printing...')
    }
 }

    livro.exibeLivro();


*/



/*
//OBJETOS PARECIDOS  -> CRIANDO UMA FACTORY


function criarLivros(titulo, autor, paginas) {



    const livro = {

        livroTitulo: titulo,
        livroAutor: autor,
        livroPaginas: paginas,

        exibeLivro: function (){ 
            console.log ('Printing...')
        }
    }

   return livro;
}

const livro1 = criarLivros('o cortiço', 'james', 306);
const livro2 = criarLivros('A cabana', 'Napoleao', 556);
console.log(livro1);
console.log(livro2);
*/

/*

//Propriedades do OBJETO 
//adiciuonando propriedades depois que o objeto foi criado

function criarLivros(titulo, autor, paginas) {



    const livro = {

        livroTitulo: titulo,
        livroAutor: autor,
        livroPaginas: paginas,

        exibeLivro: function (){ 
            console.log ('Printing...')
        }
    }

   return livro;
}

const livro1 = criarLivros('o cortiço', 'james', 306);
const livro2 = criarLivros('A cabana', 'Napoleao', 556);

livro1.color = 'red';

console.log(livro1);
console.log(livro2);
*/


/*

//CONSTRUCTOR

function CriarLivros(titulo, autor, paginas) {

    this.livroTitulo = titulo;
    this.livroAutor= autor;
    this.livroPaginas= paginas;
}

const livro1 = new CriarLivros ('o cortiço', 'james', 306);



console.log(livro1);
*/

/*

//OBJETOS BUILT IN  //OBJETOS BUILT IN //OBJETOS BUILT IN //OBJETOS BUILT IN //OBJETOS BUILT IN 

console.log (Math.max(1,2,9,80,105,558,565,566))

console.log (Math.min(1,2,9,80,105,558,565,566))

*/

/*
//OBJETOS BUILT IN ---->>> STRIONG //OBJETOS BUILT IN ---->>> STRIONG //OBJETOS BUILT IN ---->>> STRIONG //OBJETOS BUILT IN ---->>> STRIONG

let mensagem = 'Oi meu nome é Eduardo';

console.log(mensagem.startsWith ('Oi'));
console.log (mensagem.length)
console.log (mensagem.includes ('Eduardo'))
*/
 
//TEMPLATE LITERALS //TEMPLATE LITERALS  //TEMPLATE LITERALS  //TEMPLATE LITERALS

let firstName = 'eduardo'

const email = 'Oi senhor ' + firstName + ', \nA reunião está confirmada, \nATT: EDUARDO ';

const email2 = `Oi senhor ${firstName}, 
A reunião está confirmada, 
ATT: EDUARDO `;

console.log (email)
console.log (email2)