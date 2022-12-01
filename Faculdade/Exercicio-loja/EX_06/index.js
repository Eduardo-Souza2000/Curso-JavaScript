let principal = document.getElementById ("principal");

let retanguloLogin = document.createElement("form");


retanguloLogin.innerHTML=`

    <fieldset>
        <h2>Login</h2>
    </fieldset>

    <fieldset>
        <label>Usuário</label><br>
        <input type="number" name="Usuario" id="login_user" value=""><br>

        <label>Senha</label><br>
        <input type="password" name="Senha" id="login_senha" value=""><br>

    </fieldset>

    <fieldset class="botao">
        <button type="button" id="bot_ok"> OK </button>
        <button type="button" id="bot_limpar"> Limpar </button>

    </fieldset>
`
principal.appendChild(retanguloLogin);


let butOK = document.getElementById("bot_ok");
butOK.addEventListener ("click", comparaLogin);

let butLimpar = document.getElementById("bot_limpar");
butLimpar.addEventListener ("click", limpar);



function comparaLogin(){

    let login = document.getElementById ("login_user");
    let numLogin = Number(login.value);
    const comparaLogin = 1234;

    let senha = document.getElementById("login_senha");
    let numSenha = Number(senha.value);
    const comparaSenha = 9999;


    if (comparaLogin === numLogin){
        if (numSenha === comparaSenha){
            window.alert("ACESSO PERMITIDO");
        }else{
            window.alert("SENHA INVALIDA");
        }
    } else{
        window.alert("LOGIN INVALIDO");
    }
}


function limpar(){
    retanguloLogin.reset();
}