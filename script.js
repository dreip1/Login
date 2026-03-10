// Função para saudar o usuário
function saudacao(nome) {
    console.log(`Olá, ${nome}! Bem-vindo ao login-project.`);
}

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

// Exemplo de uso
saudacao("João");
fazerLogin("user@example.com", "senha123");