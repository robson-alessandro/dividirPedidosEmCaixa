import { produtos } from "./produtos.js"
import  pedidos  from "./pedidosClasse.js"
import Pacotes from "./pacotes.js";
import Caixas from "./caixas.js";


let novoPedido = new pedidos ("produtoA", 3000, 4);
let pacotes = new Pacotes ()
let caixa = new Caixas()
let listaCaixas = [];
let quantidadeDeCaixa = 0;

pacotes.numPacotes = novoPedido.numeroPacotes;

function compararProdutoComPedido(produtos, novoPedido) {
    return produtos.find(produto=> produto.produto == novoPedido.produto);
}

function acharPesoDoPacote(produtoDoPedido, pedidos) {

    const pesoMileiro =  produtoDoPedido.peso / produtoDoPedido.quantidade ;
    const quantidadePorPacote = pedidos.quantidade /pedidos.numeroPacotes;
    const pesoPacote = quantidadePorPacote*pesoMileiro;
    return pesoPacote;
}
function criarCaixa(pacotes, caixa) {
    while((caixa.pesoCaixa)<=(caixa.pesoMax-pacotes.pesoDoPacote) && pacotes.numPacotes != 0){
        caixa.pesoCaixa = pacotes.pesoDoPacote+caixa.pesoCaixa;
        pacotes.numPacotes = pacotes.numPacotes - 1;
        caixa.conteudo = caixa.conteudo +1;
        
    }

}
function dividirEmCaixas(pacotes, caixa) {

    while(pacotes.numPacotes> 0){
        quantidadeDeCaixa++;

        let caixa = new Caixas();
        caixa.numeroCaixa = quantidadeDeCaixa;
        
        criarCaixa(pacotes, caixa);
        
        listaCaixas.push(caixa)
    }
            
}

const produtoDoPedido = compararProdutoComPedido(produtos, novoPedido);

pacotes.pesoDoPacote = acharPesoDoPacote(produtoDoPedido, novoPedido);

console.log(`o peso de cada pacote é ${pacotes.pesoDoPacote} referente ao produto ${novoPedido.produto}`)
const caixas = dividirEmCaixas( pacotes , caixa);

console.log(listaCaixas)