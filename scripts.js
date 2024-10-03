function generarFibonacci(){
    const numero = parseInt(document.getElementById("numeroFibonacci").value);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    //validar que la entrada es numero 
    if(isNaN(numero) || numero <= 0){
        alert("Por favor, ingrese un número válido mayor que cero.");
        return;
    }

    const serieFibonacci = fibonacci(numero);
    resultadoDiv.textContent = `Serie de Fibonacci (${numero} números): ${serieFibonacci.join(", ")}`;

    console.log(serieFibonacci.join(", "));
}


function fibonacci(n){
    let serie = [0,1];

    for (let i = 2; i < n; i++) {
        serie.push(serie[i-1] + serie[i-2]);
    }
    return serie.slice(0,n);
}