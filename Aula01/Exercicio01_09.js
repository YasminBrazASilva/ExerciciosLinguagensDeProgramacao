/*9. Escreva uma função que recebe um endereço de e-mail como argumento e retorna
true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
único símbolo '@' e pelo menos um ponto '.' após o '@'.*/

function checaEmail(email) {
    var validacao = false;

    if (email.includes("@")) {
        var emailSeparado = email.split("@")

        if (emailSeparado.length == 2 && emailSeparado[1].includes(".")) {
            validacao = true
        }
    }

    return validacao;   
}

var listaEmails = ["yasmin.silva@facens.br", "yasmin.silva@facens", "yasmin@silva@facens.br", "yasmin.silva.facens.br"]

listaEmails.forEach(email => {
    var validade = checaEmail(email)
    var validade = validade ? "válido" : "inválido";

    console.log(`O e-mail '${email}' é ${validade}`);
});