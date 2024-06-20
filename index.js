

let hero = "Lucas"
let heroLevel = ""
let resultado = getRankedAvarage()

if (resultado <= 10){
    heroLevel = "Ferro!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );    

}else if (resultado >= 11 && resultado <= 20){
    heroLevel = "Bronze!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );   

}else if (resultado >= 21 && resultado <= 50){
    heroLevel = "Prata!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );   

}else if (resultado >= 51 && resultado <= 80){
    heroLevel = "Ouro!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );    

}else if (resultado >= 81 && resultado <= 90){
    heroLevel = "Diamante!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );    

}else if (resultado >= 91 && resultado <= 100){
    heroLevel = "Lendário!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );   

}else if (resultado >= 101){
    heroLevel = "Imortal!"
    console.log("O Heroi " + hero + " tem o saldo de " + resultado + " e está no nivel de " + heroLevel );     

}    
function getRankedAvarage(){
    let win = 1

    while(win < 105 ){
       win++
    }
   
   let lose = 1

   while(lose < 10){
       lose++
    }
     
    return win - lose
}