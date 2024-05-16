function exibir(){
 let n = document.getElementById("n").value 
 let t=0
 let i=1
 let fibAnt = 0
 let fibatual = i

 document.getElementById("tri").innerHTML=""
 document.getElementById("qua").innerHTML=""
 document.getElementById("fib").innerHTML=""
 
 do{
    t+=i
    document.getElementById("tri").innerHTML += `${t} - `
    document.getElementById("qua").innerHTML += `${i**2} - `
    document.getElementById("fib").innerHTML += `${fibatual} - `
    i++

    proxFib =  fibAnt +  fibatual
    fibAnt = fibatual
    fibatual = proxFib
 } while(i<=n)
}

//resolvendo os quadrados
    