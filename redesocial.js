let gerenciaRedesSocial = () => {
    let vetorRedesSociais = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe a url da rede`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
}
// cadastro dos usuarios 
let vetorUsuarios = []
for(let i=0;i<5;i++){
    let objeto = {
        login: prompt(`Informe o login do usuário`),
        nome: prompt(`Informe o nome do usuário`),
        codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
        qtdePosts: Number(prompt(`Informe a qtde de Posts`))
    }
    // só faremos isso se a rede social existir
    let achou = false // assumo que nao achei a rede social
    let j = 0 // indice do vetor rede sociais
    while(!achou && j<5){
        if(vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){
            vetorUsuarios.push(objeto) // inserimos
            achou = true
            alert(`Usuário Inserido com sucesso`)
        }
        j++
    }
    if(!achou) {
        alert(`Usuário não inserido pois a Rede social não foi encontrada`)
    }
}
// Exe1) o usuário informa informa a rede social, e o programa retorna quantos posts foram feitos
// Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
// Exe3) o usuário informa informa o login do usuário, e o programa retorna quantos posts ele fez
// Exe4) o programa retorna quantos posts foram feitos por cada usuário
let cogido = Number(prompt(`Informe o código da rede social`))
let conta = 0
for ( let  i = 0 ; i < 5 ; i ++ ) {  // percore o vetor vetorUsuários
    if  ( vetorUsuarios [ i ] . codigoRedeSocial  ==  codigo ) {  // encontrei
        conta  =  conta  +  vetorUsuários [ i ] . qtdePosts
    }
  }
  if  ( conta  ==  0 ) {
      console . log ( `Não há postagem ou rede social não existe` )
  }
  else  {
      console . log ( `A qtde de post na rede social $ { codigo } foi $ { conta } ` )
  }

