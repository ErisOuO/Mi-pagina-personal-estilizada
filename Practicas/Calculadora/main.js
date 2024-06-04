function sumar(){
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)
    var h3=document.getElementById("res")
    var resultado=0

    if(isNaN(num1) || isNaN(num2)){
        if(isNaN(num1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("n1").focus()
        } else {
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("n2").focus()
        }
        return
    }

    resultado=num1+num2
    h3.innerHTML = resultado
}

function restar(){
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)
    var h3=document.getElementById("res")
    var resultado=0

    if(isNaN(num1) || isNaN(num2)){
        if(isNaN(num1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("n1").focus()
        } else {
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("n2").focus()
        }
        return
    }

    resultado=num1-num2
    h3.innerHTML = resultado
}

function multiplicar(){
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)
    var h3=document.getElementById("res")
    var resultado=0

    if(isNaN(num1) || isNaN(num2)){
        if(isNaN(num1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("n1").focus()
        } else {
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("n2").focus()
        }
        return
    }

    resultado=num1*num2
    h3.innerHTML = resultado
}
    
function dividir(){
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)
    var h3=document.getElementById("res")
    var resultado=0

    if(isNaN(num1) || isNaN(num2)){
        if(isNaN(num1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("n1").focus()
        } else {
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("n2").focus()
        }
        return
    }
    
    if(num2==0){
        h3.innerHTML="El valor 2 no puede ser 0"
        document.getElementById("n2").focus()
    } else {
        resultado=num1/num2
        h3.innerHTML = resultado
    }
    return
}   
