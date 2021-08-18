let vetor = []

for(let i=0;i<4;i++){
    // cria objeto
    let objeto = {
        nome:prompt(`Iforme o nome do produto: `),
        qtde:Number(prompt(`Informe a quantidade do produto: `)),
        preco:Number(prompt(`Informe preço do produto: `))
    }
    // adiciona o objeto no vetor
    vetor.push(objeto)
}

//calcular a média de preço dos produtos
let soma = 0
for(let i=0;i<4;i++){
    soma = soma + vetor[i].preco
}
console.log(`A média é de ${soma/4}`)
