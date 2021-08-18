// vamos criar um objeto

let carro = new Object()
carro.marca="Chevrolet"
carro.modelo="Onix"
carro.ano=2019
carro.cor="preto"

console.log[carro]

// criando o meu

let psg = new Object()
psg.jogador="Messi"
psg.numero=30
psg.posicao="Atacante"
psg.altura=1.70

console.log[psg]

// outra maneira de fazer

let psg = {
    jogador:"Messi",
    numero:30,
    posicao:"Atacante",
    altura:1.70,
}
console.log(psg)

// terceira forma de fazer

let psg = new Object()

psg["jogador"] = "Messi"
psg["numero"] = 30
psg["posicao"] = "Atacante"
psg["altura"] = 1.70
