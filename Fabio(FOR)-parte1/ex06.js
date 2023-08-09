import prompt from "prompt-sync";
let input = prompt()

function main(){
  
    let j = 1

    for (let index = 0; index <= 10; index++) {
        
        console.log(`${j} x ${index} = ${j * index}`)
        
        if(index >= 10 && j <= 10){
            index = 0
            j++

        }else if(j > 10){

            break
        }
    }

}
main()