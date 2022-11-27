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


