//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();

//Código del circulo
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return Math.PI * diametro;
} 

function areaCirculo(radio) {
    return Math.PI*(radio*radio);
} 
console.groupEnd();

//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    //const value = input.value;

    const perimetro = perimetroCuadrado(input);
    const res = document.getElementById("resC").innerText = "El perímetro es: " + perimetro;
    //alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const res = document.getElementById("resC").innerText = "El area es: " + area;
    //alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("lado1T").value);
    const lado2 = parseInt(document.getElementById("lado2T").value);
    const base = parseInt(document.getElementById("baseT").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    //alert(perimetro);
    const res = document.getElementById("resT").innerText = "El perímetro es: " + perimetro;
}

function calcularAreaTriangulo() {
    const base = parseInt(document.getElementById("baseT").value);
    const altura = parseInt(document.getElementById("alturaT").value);

    const area = areaTriangulo(base, altura);
    const res = document.getElementById("resT").innerText = "El area es: " + area;
    //alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("radio").value);

    const perimetro = perimetroCirculo(radio);
    const res = document.getElementById("resCi").innerText = "El perímetro es: \n" + perimetro;
    //alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("radio").value);

    const area = areaCirculo(radio);
    const res = document.getElementById("resCi").innerText = "El area es: \n" + area;
    //alert(area);
}

function calcularAlturaTrianguloIsoceles(){
    const lado1 = parseInt(document.getElementById("lado1Ti").value);
    const lado2 = parseInt(document.getElementById("lado2Ti").value);
    const base = parseInt(document.getElementById("baseTi").value);

    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt((lado1*lado1) -((base*base)/4));
        const res = document.getElementById("resTi").innerText = "La atura es: \n" + altura;
        //alert(altura)
    }else {
        alert("No es un triangulo isoceles");
        return 0;
    }
}
