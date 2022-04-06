
function ordenar(a,b) {
    if (a < b){
        return -1
    }else if (a > b){
        return 1
    } else {
        return 0;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length
    return promedio;
}

function esPar(numerito){
    if((numerito % 2) === 0){
        return true;
    }else {
        return false;
    }
}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);

    let mediana;
    lista = lista.sort(ordenar);
    console.log(lista);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
        mediana = calcularMediaAritmetica([elemento1,elemento2]);
    }else {
        mediana = lista[mitadLista];
    }
    console.log("La media es: " + mediana);
    return mediana;
}

function calcMediana() {
    var datos = document.getElementById("inputMediana").value;
    var exp = /\s*,\s*/;
    var separados = datos.split(exp);
    var lista = separados.map(function(i){
        return parseFloat(i);
    });
    var mediana = calcularMediana(lista);
    var res = document.getElementById("resulMe").innerText = "La mediana es: " + mediana;
}
