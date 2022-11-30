let principal = document.getElementById ("principal");

let retanguloLogin = document.createElement("article");

retanguloLogin.innerHTML=`

    <fieldset>
        <h2>Login</h2>
    </fieldset>

    <fieldset>
        <label>Usuário</label><br>
        <input type="number" name="Usuario" id="login_user" value=""><br>

        <label>Senha</label><br>
        <input type="number" name="Senha" id="login_senha" value=""><br>

    </fieldset>

    <fieldset class="botao">
        <input type="submit" value="OK" onclick="comparaLogin()">
        <input type="submit" value="Limpar" onclick="">
    </fieldset>
`

principal.appendChild(retanguloLogin);

function comparaLogin(){
    
    let login = document.getElementById ("login_user");
    let numLogin = Number(login.value);
    let comparaLogin = 1234;

    let senha = document.getElementById("login_senha");
    let numSenha = Number(senha.value);
    let comparaSenha = 9999;

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