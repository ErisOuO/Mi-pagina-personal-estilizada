function confirma(){
    pa=document.getElementById("pass").value
    pb=document.getElementById("pass2").value

    if (pa!=pb) {
        alert("Las password no coinciden.")
        return
    }
}