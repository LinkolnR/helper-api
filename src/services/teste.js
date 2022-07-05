// var cpf 
// cpf = ""
// while (cpf.length<9){
//     var aleatorio = Math.floor(Math.random() * 9);
//     cpf+= aleatorio
// } 
// console.log('primeiros 9 numeros gerados', cpf)
// let j = 1
// let dv = 0
// for (let index = 0; index < 9; index++) {
//     if (j ==4){
//         j = 1
//     }
//     {
//         let numero  = parseInt(cpf.slice(index,index+1),10)
//         dv+= numero*j
//         console.log(numero , j,index)
//         j+=1
//     }
// }
// cpf += "-" + dv
// console.log(cpf)

// 150|370|307
const cpf = "184630356-72"
let j = 1
let dv = 0
for (let index = 0; index < 9; index++) {
    if (j ==4){
        j = 1
    }
    {
        let numero  = parseInt(cpf.slice(index,index+1),10)
        dv+= numero*j
        console.log(numero,j,index)
        j+=1
    }
}
console.log(dv)
let final = parseInt(cpf.slice(10,12),10)
if (final == dv){
    console.log(true)
}
console.log(false)

// console.log(1*1+8*2+4*3+6+3*2+3+10+18)
// let final = cpf.slice(10,12)
// "184630356-72"
// console.log(final)