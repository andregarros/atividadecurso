var lampadaoff = document.getElementById('lampadaoff')
var lampadaon = document.getElementById('lampadaon')
var butonon = document.getElementById('ligar')
var butonof = document.getElementById('desligar')
butonon.addEventListener("click", lampadaLigada)
butonof.addEventListener("click", lampadaDesligada)
lampadaon.style.display = "none"

function lampadaLigada(){
    if(lampadaoff.style.display = "block"){
        lampadaoff.style.display = "none"
        lampadaon.style.display = "block"
        lampadaoff.style.backgroundColor = "black"
    }
}
function lampadaDesligada(){
    if(lampadaoff.style.display = "none"){
        lampadaoff.style.display = "block"
        lampadaon.style.display = "none"
    }
}

var senha1 = document.getElementById("senha")
var senha2 = document.getElementById("comfirmesenha")
var senhaincorreta = document.getElementById("senhaincorreta")
var btn = document.getElementById("enviar")
btn.addEventListener("click", enviar)
senhaincorreta.style.display = "none"

function enviar(){
    if (senha1.value == senha2.value){
        alert('senha correta')
    }
    else if(senha1.value != senha2.value){
        senhaincorreta.style.display = "block"
    }

}
var esconder = document.getElementById("esconder")
var btnolho = document.getElementById("btn-olho")
btnolho.addEventListener("click", mostrar)
function mostrar(){
    if(esconder.type === "password"){
        esconder.setAttribute("type","text")
    }else{
        esconder.setAttribute("type", "password")
    }
}
var numero1 = document.getElementById("numero1")
var numero2 = document.getElementById("numero2")
var resultado = document.getElementById("resultado")
var somar = document.getElementById("somar")
var subtrair = document.getElementById("subtrair")
var dividir = document.getElementById("dividir")
var multiplicar = document.getElementById("multiplicar")
somar.addEventListener("click", somar1)
dividir.addEventListener("click", dividir2)
multiplicar.addEventListener("click", multiplicar3)
subtrair.addEventListener("click", subtrair1)

function somar1(){
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    let somatotal = n1 + n2
    resultado.innerHTML = `o resultado da soma é: ${somatotal}`
}
function dividir2(){
    var d1 = Number(numero1.value)
    var d2 = Number(numero2.value)
    let divisaototal = d1 / d2
    resultado.innerHTML = `o resultado da soma é: ${divisaototal}`

}
function multiplicar3(){
    var m1 = Number(numero1.value)
    var m2 = Number(numero2.value)
    let multitotal = m1 * m2
    resultado.innerHTML = `o resultado da soma é: ${multitotal}`
}
function subtrair1(){
    var s1 = Number(numero1.value)
    var s2 = Number(numero2.value)
    let subtrairtotal = s1 - s2
    resultado.innerHTML = `o resultado da soma é: ${subtrairtotal}`
}



