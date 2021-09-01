
let sistemaVendas = () => {
    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Procura venda \n4. Soma venda por vendedor \n5.  \n6. Sair`))
        switch(opcao){
            case 1: let objeto = {
                codigo: Number(prompt(`Informe código`)),
                nome: prompt(`Informe nome`),
                rg: prompt(`Informe rg`)
            }
            // verifica se já tem outro vendedor com outro código
            let achou1 = false
            // vetVendedores.length retonar o tamanho do vetor
            for(let i=0; i< vetVendedores.length; i++){
                if(vetVendedores[i].codigo === objeto.codigo){
                    achou1 = true // achie - nao posso cadastrar
                }
            }
            if(!achou1){
                // adiciona objeto no vetor
                vetVendedores.push(objeto)
                alert(`Vendedor cadastrado com sucesso`)
            }
            else {
                alert(`Vendedor já existe com este código`)
            }
            console.log(vetVendedores)
                break
            case 2: let objeto1 = {
                codigo: Number(prompt(`Informe código do vendedor`)),
                mes: Number(prompt(`Informe mês da venda`)),
                valor: Number(prompt(`Informe o valor da venda`))
            }
            let achou2 = false
            for(let i=0; i<vetVendas.length; i++){
                if((vetVendas[i].codigo === objeto1.codigo) && (vetVendas[i].mes === objeto.mes)){
                    achou2 = true
                }
            }
            if(!achou2){
                vetVendas.push(objeto1)
            }
            else {
                alert(`Já existe venda deste vendedor neste mês`)
            }
            console.log(vetVendas)
                break
            case 3: let codigo = Number(prompt(`Informe o código do vendedor`))
                    let mes = Number(prompt(`Informe o mes da venda`))
                    // percorre vetor de vendas
                    let achou3 = false
                    for(let i=0; i<vetVendas.length; i++){
                        if((vetVendas[i].codigo === codigo) && (vetVendas[i].mes == mes)){
                            console.log(`O valor da venda do funcionário ${codigo} no mês ${mes} foi ${vetVendas[i].valor}`)
                            achou3 = true
                        }
                        
                    }
                    if(!achou3){
                        console.log(`Venda não encontrada para este funcionário neste mês`)
                    }
                    break
                case 4: let codigo4 = Number(prompt(`Informe o código do vendedor`))
                        // percorre o vetor de vendas
                        let soma = 0
                        let achou4 = 0
                        for(let i=0; i<vetVendas.length; i++){
                            if(vetVendas[i].codigo4 === codigo4){
                                soma = soma + vetVendas[i].valor
                                achou4 = true
                            }
                        }
                        if(!achou4){
                            console.log(`Venda não encontrada para esse funcionário`)
                        }
                        else{
                            console.log(`O total de vendas do vendedor ${codigo4} foi ${soma}`)
                        }
                        break
                case 5: let mes5 = Number(prompt(`Informe o mês de interesse`))
                        for(let i=0; i<vetVendas.length; i++){
                            
                        }
                        break
                case 6: alert(`O programa será encerrado`)
                        break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao !== 4)
}