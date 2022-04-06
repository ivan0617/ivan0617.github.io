
function calcularModa (lista){
    const listaCount = {};

    lista.map(
        function(element){
            if (listaCount[element]) {
                listaCount[element] += 1;
            } else {
                listaCount[element] = 1;
            }
        }
    );

    const lista2 = Object.entries(listaCount).sort(
        function (a,b){
            /** 
             * a[1] - b[1] < 0 -> return number negative
             * a[1] - b[1] > 0 -> return number positive
             * a[1] - b[1] = 0 -> return 0
            */
            return a[1] - b[1];
        }
    );

    const moda = lista2[lista2.length-1]
    //console.log(moda)
    return moda[0];
}

function calcModa() {
    var datos = document.getElementById("inputModa").value;
    var exp = /\s*,\s*/;
    var separados = datos.split(exp);
    var lista = separados.map(function(i){
        return parseFloat(i);
    });
    var moda = calcularModa(lista);
    var res = document.getElementById("resulMo").innerText = "La moda es: " + moda;
}
