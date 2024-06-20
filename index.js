

let hero = "Lucas"
let resultado = getRankedAvarage()
console.log(resultado)

if (resultado <= 10){
    console.log("O Heroi " + hero + " Está Ferro!");

}else if (resultado >= 11 && resultado <= 20){
    console.log("O Heroi" + hero + " Está Bronze!");

}else if (resultado >= 21 && resultado <= 50){
    console.log("O Heroi" + hero + " Está Prata!");

}else if (resultado >= 51 && resultado <= 80){
    console.log("O Heroi" + hero + " Está Ouro!"); 

}else if (resultado >= 81 && resultado <= 90){
    console.log("O Heroi" + hero + " Está Diamante!"); 

}else if (resultado >= 91 && resultado <= 100){
    console.log("O Heroi" + hero + " Está Lendário!"); 

}else if (resultado >= 101){
    console.log("O Heroi" + hero + " Está Imortal!");     

}    
function getRankedAvarage(){
    let win = 1

    while(win < 105 ){
       win++
    }
   
   let lose = 1

   while(lose < 1 ){
       lose++
    }
     
    return win - lose
}