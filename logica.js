//Variavel que armazena o saldo inicial da conta
let saldo = 0

//Função para atualizar o saldo na tela
function atualizarSaldo(){
    //Selecionar o elemento do saldo e atualizar o texto com o valor 
    document.getElementById('saldo').textContent = saldo.toFixed(2)
}

//Função que realiza o deposito
function depositar(){
    //Obtem o valor digitado pelo usuario e converte para o numero decimal
    valor = parseFloat(document.getElementById('valor').value)
    //Verifica se o valor é valido (maior que 0 e numerico)
    if(isNaN(valor) || valor <= 0) {
        //Exibe alerta se o valor for inválido
        alert("Por Favor meu querido,insira um número válido!")
        return //Interrompe a execução da função 
    }
    //Adicionar o valor ao saldo 
    saldo += valor
    //Atualizar o saldo tela
    atualizarSaldo()

    //Exibir uma mensagem confirma o deposito
    alert("Que isso amigão, ta com o pacote hein! Deposito de R$ " + valor.toFixed(2) +  "realizado com sucesso!")

}

//FUncao que realiza o saque 
function sacar(){
    //Óbtem o valor digitado pelo usuario e converte para decimal
    valor = parseFloat(document.getElementById('valor').value)
    //Verifica se o valor é valido
    if(isNaN(valor)|| valor <= 0) {
        alert("Por favor, insira um valor válido cpx")
        return
    } 
    if(valor > saldo) {
        alert("Tá duro, vai trabalhar")
        return
    }
    //Subtrai o valor do saldo 
    saldo -= valor

   //Atualizar o saldo
   atualizarSaldo(
    alert("Saque de R$ " + valor.toFixed(2) + "realizado com sucesso")
   ) 
}

//Subtrai o valor 