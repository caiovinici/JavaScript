// referente a aula 12
/*pegando hora atual do sistema*/
let hr_atual = new Date()
let horas = hr_atual.getHours()
let minutos = hr_atual.getMinutes()

console.log(`Agora são exatamente ${horas}Hrs:${minutos}Min.`)
if(horas < 12){
    console.log('Bom - dia!')
} else if(horas <= 18){
    console.log('Boa - tarde!')
} else{
    console.log('Boa - noite!')
}