interface Carro {
    marca: string;
    modelo: string;
    ano?: number;
}

let carroExemplo: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};

type MetodoPagamento = 'cartao' | 'mbway' | 'paypal';

interface Pagamento {
    valor: number;
    metodo: MetodoPagamento;
    detalhes: string;
}

function processarPagamento(pagamento: Pagamento): string {
    return `Pagamento de ${pagamento.valor}€ realizado via ${pagamento.metodo}. Detalhes: ${pagamento.detalhes}`;
}