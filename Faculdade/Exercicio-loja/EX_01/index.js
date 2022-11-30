let pai = document.getElementById("form")
let cria_principal = document.createElement ("fieldset");


cria_principal.innerHTML = `
    <article class="recebe_dados">    
        <input type="number" placeholder="VOTOS VÁLIDOS.." name="numero_eleitores_validos" id="num_validos" value="">
        <input type="number" placeholder="VOTOS BRANCOS.." name="numero_eleitores_brancos" id="num_brancos" value="">
        <input type="number" placeholder="VOTOS NULOS.."name="numero_eleitores_nulos" id="num_nulos" value="">
        <input type="submit" onclick= "resultado()">
    </article>`

pai.appendChild (cria_principal)




function resultado(){
    let votosValidos = document.getElementById ("num_validos");
    let votosBranco = document.getElementById ("num_brancos");
    let votosNulos = document.getElementById ("num_nulos");
    
    let totalVotos = parseInt(votosValidos.value) + parseInt(votosBranco.value)  + parseInt (votosNulos.value);
  

    let porcentValidos = parseInt(votosValidos.value) * 100 / totalVotos;
    let porcentBrancos = parseInt(votosBranco.value) * 100 / totalVotos;
    let porcentNulo = parseInt(votosNulos.value) * 100 / totalVotos;
    

    cria_principal.innerHTML = `
    
    <fieldset id="apresenta_dados">
        <legend>Resultado Final da Eleições 2022</legend>
        <article id="total_votos"> Total de Votos Brancos: ${votosBranco.value}</article><br>
        <article id="votos_brancos"> Percentual Votos Brancos: ${porcentBrancos} %</article><br>

        <br><article id="total_votos"> Total de Votos Nulos: ${votosNulos.value}</article><br>
        <article id="votos_nulos"> Percentual Votos Nulos: ${porcentNulo}  %</article><br>   

        <br><article id="total_votos"> Total de Votos Válidos: ${votosValidos.value}</article><br>
        <article id="votos_validos"> Percentual Votos Válidos: ${porcentValidos}  %</article>  

        <br><article id="total_votos"> Total de Votos: ${totalVotos}</article><br>
          
    </fieldset> `

pai.appendChild (cria_principal)
}