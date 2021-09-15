
deixe  sistemaVendas  =  ( )  =>  {

    deixe  opcao
    deixe  vetVendedores  =  [ ]
    deixe  vetVendas  =  [ ]
    deixe  codigo
    deixe  mes
    faça  {
        opcao  =  Número ( prompt ( `Informe: \ n1. Cadastrar vendedor \ n2. Cadastrar venda \ n3. Procura venda por mês e vendedor \ n4. Soma venda por vendedor \ n5. Mostra a maior venda do mês \ n6. Valor por mês \ n7. Sair` ) )
        switch ( opcao ) {
            caso  1 : cadastraVendedor ( vetVendedores )
                    pausa
            caso  2 : cadastraVenda ( vetVendas )
                    pausa
            caso  3 : codigo  =  Número ( prompt ( `Informe o código do vendedor` ) )
                    mes  =  Número ( prompt ( `Informe o mês da venda` ) )
                    consultaVendasCodigoMes ( vetVendas ,  codigo ,  mes )
                    pausa
            caso  4 : codigo  =  Número ( prompt ( `Informe o código do vendedor` ) )
                    consultaVendasCodigo ( vetVendas ,  codigo )
                    pausa
            caso  5 : mes  =  Número ( prompt ( `Informe o mês de interesse` ) )
                    consultaVendedor ( vetVendas ,  mes )
                    pausa
            caso  6 : consultaVendasMes ( vetVendas )
                    pausa
            caso  7 : alerta ( `O programa será encerrado` )
                    pausa
            padrão : alerta ( `Opção inválida` )
        }
    }
    enquanto  ( opcao  ! =  7 )
}

deixar  cadastraVendedor  =  ( vetVendedores )  =>  {
    let  objeto  =  {
        codigo : Number ( prompt ( `Informe código` ) ) ,
        nome : prompt ( `Informe nome` ) ,
        rg : prompt ( `Informe rg` )  // 23.646.356-1
    }
    // verifica se já tem outro vendedor com o mesmo código
    let  achou  =  false
    // vetVendedores.length retorna o tamanho do vetor
    para ( deixe  i = 0 ;  i  <  vetVendedores . comprimento ; i ++ ) {
        if  ( vetVendedores [ i ] . codigo  ==  objeto . codigo ) {
            achou  =  true  // achei - não posso cadastrar      
        }
    }
    if  ( ! achou ) {
         // adiciona objeto sem vetor
        vetVendedores . push ( objeto )
        alerta ( `Vendedor cadastrado com sucesso` )
    }
    else  {
        alert ( `Vendedor já existe com este código` )	
    }
    console . log ( vetVendedores )
}

deixe  cadastraVenda  =  ( vetVendas )  =>  {
    let  objeto  =  {
        codigo : Number ( prompt ( `Informe código do vendedor` ) ) ,
        mes : Número ( prompt ( `Informe mês da venda` ) ) ,
        valor : Número ( prompt ( `Informe o valor da venda` ) ) 
    }
    let  achou  =  false
    para ( seja  i = 0 ; i < vetVendas . comprimento ; i ++ ) {
        // não podemos cadastrar duas vendas para um mesmo vendedor no mesmo mês
        if  ( ( vetVendas [ i ] . codigo  ==  objeto . codigo )  &&  ( vetVendas [ i ] . mes  ==  objeto . mes ) ) {
            achou  =  true  // encontrei - não podemos cadastrar venda
        }
    }
    if  ( ! achou ) {
        vetVendas . push ( objeto )
    }
    else  {
        alert ( `Já existe vende deste vendedor neste mês` )
    }
    console . log ( vetVendas )
}

deixe  consultaVendasCodigoMes  =  ( vetVendas ,  codigo ,  mes )  =>  {
    // percorre vetor de vendas
    let  achou  =  false
    para ( seja  i = 0 ; i < vetVendas . comprimento ; i ++ ) {
        if  ( ( vetVendas [ i ] . codigo  ==  codigo )  &&  ( vetVendas [ i ] . mes  ==  mes ) ) {
            console . log ( `O valor da venda do funcionário $ { codigo } no mês $ { mes } foi $ { vetVendas [ i ] . valor } ` )
            achou  =  verdadeiro
        }
    }
    if  ( ! achou ) {
        console . log ( `Venda não encontrada para este funcionário neste mês` )
    }
}

deixe  consultaVendasCodigo  =  ( vetVendas ,  codigo )  =>  {
     // percorre o vetor de vendas
     deixe  soma  =  0
     para ( seja  i = 0 ; i < vetVendas . comprimento ; i ++ ) {
         if  ( vetVendas [ i ] . codigo  ==  codigo ) {
             soma  =  soma  +  vetVendas [ i ] . valentia
         }
     }
     if  ( soma  ==  0 ) {
         console . log ( `Venda não encontrada para este funcionário, ou venda igual o 0` )
     }
     else  {
         console . log ( `O total de vendas do vendedor $ { codigo } foi $ { soma } ` )
     }
}

deixe  consultaVendedor  =  ( vetVendas ,  mes )  =>  {
    let  maiorValor  =  0
    deixe  vendedorMaisVendeu  =  0 
    para ( seja  i = 0 ; i < vetVendas . comprimento ; i ++ ) {
        if  ( vetVendas [ i ] . mes  ==  mes ) {
            if  ( vetVendas [ i ] . valor  >  maiorValor ) {
                maiorValor  =  vetVendas [ i ] . valor  // atualiza o maior valor
                vendedorMaisVendeu  =  vetVendas [ i ] . codigo  // atualiza vendedor
            }
        }
    }
    console . log ( `O vendedor que mais vendeu foi $ { vendedorMaisVendeu } com $ { maiorValor } ` )
}

deixe  consultaVendasMes  =  ( vetVendas )  =>  {
    deixe  vetMeses  =  [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
    // percorre o vetor de vendas
    para ( seja  i = 0 ; i < vetVendas . comprimento ; i ++ ) {
        vamos  aux  =  vetVendas [ i ] . mes  // mês da venda
        vetMeses [ aux - 1 ]  =  vetMeses [ aux - 1 ]  +  vetVendas [ i ] . valentia
    }
    console . log ( vetMeses )
}