import prompt from "prompt-sync";
let input = prompt()

function main(){
  
    let index = 0
    let j = 1

    while(index <= 10) {
        
        console.log(`${j} x ${index} = ${j * index}`)
        
        if(index >= 10 && j <= 10){
            index = 0
            j++

        }else if(j > 10){

            break
        }

        index++
    }

}
main()