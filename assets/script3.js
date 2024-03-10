var parrafo = document.querySelector('p')
var numero1 = document.querySelector('.boton1').value
var numero2 = document.querySelector('.boton2').value
var numero3 = document.querySelector('.boton3').value
resultado = numero1 + numero2 + numero3
if(resultado == 911){
parrafo.innerHTML = 'password 1 correcto'
}else if(resultado == 714){
    parrafo.innerHTML = 'password 2 es correcto'
}else{
    parrafo.innerHTML = 'password incorrecto'
}