//1
let nome = prompt("Digite seu nome de usu�rio: ")

while (nome !== "yohanna") {
    console.log("Nome inv�lido")
    nome = prompt("Digite seu nome de usu�rio: ")
}
console.log("Nome aceito:", nome)

//2
let senha = prompt("Crie sua senha: ")

while (senha !== "2345") {
    console.log("Senha inv�lida")
    senha = prompt("Crie sua senha: ")
}
console.log("Senha criada com sucesso")

//3
let senha = prompt("Digite sua senha: ")
 let confirma��o = prompt("Confirme sua senha: ")

while (senha !== "2345") {
    console.log("As senhas n�o coincidem")
    confirma��o = prompt("Confirme sua senha: ")
}
console.log("Senha confirmada com sucesso!")

//4
let usuario = prompt("Digite o usu�rio: ")
let senha = Number(prompt("Digite a senha: "))

while (usuario !== "admin" || senha !== 1234) {
    console.log("Dados Errados")
    usuario = prompt("Digite o usu�rio: ")
    senha = Number(prompt("Digite a senha: "))
}
console.log("Login Efetuado!")

//5
let usuario = prompt("Digite o usu�rio:")
let senha = Number(prompt("Digite a senha:"))

while (usuario !== "admin" || senha !== 1234) {
    console.log("Usu�rio ou senha incorretos.")
    usuario = prompt("Digite o usu�rio:")
    senha = Number(prompt("Digite a senha:"))
}
console.log("Login Efetuado!")

//6
let tentativas = 0;
while (prompt("Digite seu usu�rio:") !== "CarolGaldino") {}

while (prompt("Digite sua senha:") !== "12345") {}

console.log("\nPara continuarmos o login,");

while (tentativas < 3) {
    let confirmacao = prompt("Confirme sua senha:");
    if (confirmacao === "12345") {
        console.log("\nLogin Efetuado");
        break;
    } else {
        tentativas++;
        if (tentativas < 3) {
            console.log("\nSenha incorreta! Tente novamente.");
        } else {
            console.log("\nAcesso bloqueado!");
        }
    }
}
//7
let login = prompt("Crie seu login: ")
let senha = Number (prompt("Crie sua senha: "))
let login1 = prompt("Digite seu login: ")
let senha1 = Number (prompt("Digite sua senha: "))
while(login1 !== login || senha1 !== senha){
    console.log("Usuario ou senha incorretos, tente novamente")
    login1 = prompt("Digite seu login: ")
    senha1 = Number (prompt("Digite sua senha: "))
}
console.log("Acesso liberado")

//8
let senha = Number (prompt("Digite sua senha: "))
let senhacorreta = 230809
while(senha !== senhacorreta){
    let mensagem = prompt("Esqueceu sua senha? ")
    if(mensagem = "Sim")
    console.log(senhacorreta)
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Senha correta")

//9
let usuario = prompt("Digite seu usuario: ")
let senha = Number (prompt("Digite sua senha: "))

while(usuario !== "Ana" || senha !== 230809 ){
    console.log("Usuario ou senha incorretos, tente novamente")
usuario = prompt("Digite seu usuario: ")
 senha = Number (prompt("Digite sua senha: "))
}
 console.log("Voc� esta logado ")

let acesso = prompt("Palavra de sa�da: ")
let sair = "logout"
while(acesso == sair){
    console.log("Voc� n�o est� mais logado")
    usuario = prompt("Digite seu usuario: ")
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Comando n�o encontrado")
