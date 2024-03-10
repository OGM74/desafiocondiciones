var parrafo= document.querySelector('p')
var numero1= document.querySelector('.oso').value
var numero2= document.querySelector('.rana').value
var numero3= document.querySelector('.perro').value
resultado = Number(numero1) + Number(numero2) + Number(numero3)
if(resultado>=10){
    parrafo.innerHTML = 'Llevas' + resultado
resulatdo>10
}else{
    parrafo.innerHTML = 'Llevas demasiados stickers'

}
