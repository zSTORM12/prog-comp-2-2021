function principal(){
    let opcao
    do{
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4. Sair`))
        switch(opcao){
            case 1: f1()
                    break
            case 2: f2()
                    break
            case 3: f3()
                    break
            case 4: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção Inválida`)
        }
    }
    while(opcao !== 4)
}

function f1(){
    alert(`Chamada de f1`)
}

function f2() {
    alert(`Chamada de f2`)
}

function f3() {
    alert(`Chamada de f3`)
}