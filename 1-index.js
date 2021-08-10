class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;

contaCorrenteLucas.depositar(-100);
contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);

const valorSacado = contaCorrenteLucas.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteLucas);