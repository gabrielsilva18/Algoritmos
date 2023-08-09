import prompt  from "prompt-sync";
let input = prompt()


function main(){

    let data = input('Insira uma data no formato DD/MM/AAAA: ')
    let partes_data = data.split('/')

    let dia = partes_data[0]
    let mes = partes_data[1]
    let ano = partes_data[2]

    let mes_extenso = verificar_mes(mes)

    console.log(`${dia} de ${mes_extenso} de ${ano}`)
}
main()

function verificar_mes(mes){

    if(mes == '01'){

        mes = 'janeiro'
    }
    if(mes == '02'){

        mes = 'Fevereiro'
    }
    if(mes == '03'){

        mes = 'Março'
    }
    if(mes == '04'){

        mes = 'Abril'
    }
    if(mes == '05'){

        mes = 'Maio'
    }
    if(mes == '06'){

        mes = 'junho'
    }
    if(mes == '07'){

        mes = 'julho'
    }
    if(mes == '08'){

        mes = 'Agosto'
    }
    if(mes == '09'){

        mes = 'Setembro'
    }
    if(mes == '10'){

        mes = 'Outubro'
    }
    if(mes == '11'){

        mes = 'Novembro'
    }
    if(mes == '12'){

        mes = 'Dezembro'
    }
    
    return mes
}