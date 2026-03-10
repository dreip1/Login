
// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função de login simples
function fazerLogin(email, senha) {
    if (validarEmail(email) && senha.length >= 6) {
        console.log("Login realizado com sucesso!");
        return true;
    } else {
        console.log("Email ou senha inválidos!");
        return false;
    }
}

//Ver senha//
function mostrarSenha() {
    var input = document.getElementById("senha");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}