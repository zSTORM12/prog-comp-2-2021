function principal(){
    let opcao
    let idade
    let peso, altura
    let vetor = []
    do{
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4.F4. 5. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
                    break
            case 2: 
                    peso = Number(prompt(`Informe o peso`))
                    idade = f2(idade, peso)
                    break
            case 3: idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    idade = f3(idade, peso, altura)
                    break
            case 4: vetor.push(1)
                    vetor.push(2)
                    vetor.push(3)
                    f4(vetor) // passando um vetor com parâmetro de uma função
                    alert(vetor)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção Inválida`)
        }
    }
    while(opcao !== 4)
}

function f1(idade){
    alert(`Valor da idade ${idade}`)
    idade = idade + 10
    return idade // retorna o resultado.

}

function f2(idade, peso) {
    alert(`Valor da idade ${idade} e do peso ${peso}`)
    return idade
}
function f3(idade, peso, altura) {
    alert(`Valor da idade ${idade} do peso ${peso} e da altura ${altura}`)
    return idade
}

function f4(vetor){
    // alterando o valor do vetor
    vetor[0] = vetor[0] + 10
    vetor[1] = vetor[1] + 10
    vetor[2] = vetor[2] + 10
}