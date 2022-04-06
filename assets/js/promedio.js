
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

function calcularMedia() {
    var datos = document.getElementById("inputMedia").value;
    var exp = /\s*,\s*/;
    var separados = datos.split(exp);
    var lista = separados.map(function(i){
        return parseFloat(i);
    });
    var media = calcularMediaAritmetica(lista);
    var res = document.getElementById("resulP").innerText = "La media es: " + media;
}