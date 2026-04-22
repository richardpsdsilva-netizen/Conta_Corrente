// 1 .Classe Cliente

class Cliente {

    // Metodo Construtor : Excelente quando criamos um novo cliente

    constructor(nome, cpf, agencia, conta) {
        // "this" representa o objeto que esta sendo criado 
        this.nome = nome; // Armazena o nome recebido
        this.cpf = cpf;
        this.agencia = agencia;
        this.conta = conta;

    }

}

// 2 . Classe Conta Corrente:

class ContaCorrente {

    // Construtor recebe um cliente ja criado

    constructor(cliente) {

        this.cliente = cliente // Associa a conta a um cliente
        this.saldo = 0; // inicia o saldo com 0 

    }



    // 2.1 Metodo para realizar o deposito

    depositar(valor) {

        // Guarda o saldo antes da operação
        let saldoAnterior = this.saldo;

        // Soma o Valor depositado ao saldo atual
        this.saldo += valor;

        return {

            valor: valor, // Saldo antes da Operação
            saldoAnterior: saldoAnterior; // saldo antes da operação 
            saldoAtual: this.saldo, // Novo saldo apos o deposito 
            tipo: "Deposito", // Tipo da operação
            data: new Date().toLocaleDateString(), //Data atual formatada
        };

    }

}

// 3 . Funcão Principall (excultada ao clicar no botão)
function CriarConta() {
    // pega o valor digitado no input "nome"
    let nome = document.getElementById("nome").Value;
    let cpf = document.getElementById("cpf").Value;
    let agencia = document.getElementById("agencia").Value;
    let conta = document.getElementById("conta").Value;

    //converte o valor digitado para numero (float)
    let valor = parseFloat(document.getElementById("valor").value);


    // 4 . Criando o objeto cliente com os dados digitados 
    let cliente = new Cliente(nome, cpf, agencia, conta);

    //Cria uma conta vinculada ao cliente

    let ContaCorrente = new ContaCorrente(cliente);


    // Executa o deposito e guarda o resultado
    let operacao = ContaCorrente, depositar(valor);

    //5 . Exibe o extrato na tela (dentro da div "estração")
    document.getElementById("estrato")


}