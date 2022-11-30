let principal = document.getElementById ("principal");

let criaFildset = document.createElement ("fieldset");

criaFildset.innerHTML= `
    <legend>DIGITE A IDADE: </legend>
    <input type="number" placeholder="Digite a idade do Diego"   name="Diego"   id="idade_diego"   value="">
    <input type="number" placeholder="Digite a idade do Gabriel" name="Gabriel" id="idade_gabriel" value="">
    <input type="number" placeholder="Digite a idade da Grazi"   name="Grazi"   id="idade_grazi"   value="">
    <input type="number" placeholder="Digite a idade da Amanda"  name="Amanda"  id="idade_amanda"  value="">
    <input type="submit" onclick="calculaIdades()">
`
principal.appendChild(criaFildset);

function calculaIdades (){
    let idadeDiego = document.getElementById("idade_diego");
    let valorDiego = Number(idadeDiego.value);

    let idadeGabriel = document.getElementById("idade_gabriel");
    let valorgabriel= Number (idadeGabriel.value);

    let idadeGrazi = document.getElementById("idade_grazi");
    let valorGazi = Number (idadeGrazi.value);

    let idadeAmanda = document.getElementById("idade_amanda");
    let valorAmanda = Number (idadeAmanda.value);


    if (valorDiego === valorgabriel){

        window.alert ("IDADES DOS HOMENS SAO IGUAIS, FAVOR TROCAR AS IDADES");
    }

    else if (valorAmanda === valorGazi) {

        window.alert ("IDADES DAS MULHERES SAO IGUAIS, FAVOR TROCAR AS IDADES");

    } else{

        if (valorDiego > valorgabriel){

            if(valorAmanda < valorGazi){

                let idadeDieAma =  valorDiego + valorAmanda;
                let idadeGabGra = valorGazi + valorgabriel;
                let criaArticle = document.createElement ("article");

                criaArticle.innerHTML= `

                    <p> O Diego mais Velho : ${valorDiego} anos de idade</p>
                    <p>O Gabriel mais Novo:${ valorgabriel} anos de idade</p>
                    <p> A Grazi mais Velha: ${valorGazi} anos de idade</p>
                    <p> A Amanda mais nova: ${valorAmanda}</p><br>

                    <p> A Soma da idade Homem DIEGO mais Velho e Mulher mais Nova AMANDA: ${idadeDieAma} </p><br>

                    <p> A Soma da idade Mulher mais Velha GRAZI e Homem mais Novo GABRIEL: ${idadeGabGra} </p> `

                principal.appendChild(criaArticle);

            } else {

                let idadeDieGra =  valorDiego + valorGazi;
                let idadeGabAma = valorAmanda + valorgabriel;
                let criaArticle = document.createElement ("article");

                criaArticle.innerHTML= `

                    <p> O Diego mais Velho : ${valorDiego} anos de idade</p>
                    <p>O Gabriel mais Novo:${ valorgabriel} anos de idade</p>
                    <p> A Amanda mais Velha: ${valorAmanda} anos de idade</p>
                    <p> A Grazi mais nova: ${valorGazi}</p><br>

                    <p> A Soma da idade Homem mais Velho DIEGO e Mulher mais Nova GRAZI: ${idadeDieGra} </p><br>

                    <p> A Soma da idade Mulher mais Velha AMANDA e Homem mais Novo GABRIEL: ${idadeGabAma} </p> `

                principal.appendChild(criaArticle);

            }

        } else {
            
            if(valorAmanda < valorGazi){

                let idadeGabAma =  valorgabriel + valorAmanda;
                let idadeDieGra = valorGazi + valorDiego;
                let criaArticle = document.createElement ("article");

                criaArticle.innerHTML= `

                    <p> O Gabriel mais Velho : ${valorgabriel} anos de idade</p>
                    <p>O Diego mais Novo:${valorDiego} anos de idade</p>
                    <p> A Grazi mais Velha: ${valorGazi} anos de idade</p>
                    <p> A Amanda mais nova: ${valorAmanda}</p><br>

                    <p> A Soma da idade Homem mais Velho GABRIEL e Mulher mais Nova AMANDA: ${idadeGabAma} </p><br>

                    <p> A Soma da idade Mulher mais Velha GRAZI e Homem mais Novo DIEGO: ${idadeDieGra} </p> `

                principal.appendChild(criaArticle);

            } else {

                let idadeGabGra =  valorgabriel + valorGazi;
                let idadeDieAma = valorAmanda + valorDiego;
                let criaArticle = document.createElement ("article");

                criaArticle.innerHTML= `

                <p> O Gabriel mais Velho : ${valorgabriel} anos de idade</p>
                <p>O Diego mais Novo:${valorDiego} anos de idade</p>
                <p> A Amanda mais Velha: ${ valorAmanda} anos de idade</p>
                <p> A Grazi mais nova: ${valorGazi}</p><br>

                <p> A Soma da idade Homem mais Velho GABRIEL e Mulher mais Nova GRAZI: ${idadeGabGra} </p><br>

                <p> A Soma da idade Mulher mais Velha AMANDA e Homem mais Novo DIEGO: ${idadeDieAma} </p> `

                principal.appendChild(criaArticle);

            }
        }

        

    }

}