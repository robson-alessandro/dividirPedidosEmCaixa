export default class Caixas {
    numeroCaixa
    pesoCaixa
    conteudo

    constructor (numeroCaixa=0 , pesoCaixa = 0, conteudo=0, pesoMax = 31){
        this.numeroCaixa = numeroCaixa,
        this.pesoCaixa = pesoCaixa,
        this.conteudo = conteudo,
        this.pesoMax = pesoMax
    }
}