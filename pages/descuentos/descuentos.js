const coupons = [
    {name: "ichi", discount: 10},
    {name: "ni", discount: 20},
    {name: "san", discount: 30},
    {name: "yon", discount: 40},
    {name: "go", discount: 50},
    {name: "roku", discount: 60},
    {name: "nana", discount: 70},
    {name: "hachi", discount: 80},
    {name: "kyuu", discount: 90},
    {name: "juu", discount: 100}
];

function  calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;

    return precioConDescuento;
}

function getOptionCoupon() {
    const option = document.getElementById("optionCoupon").value;
    if(option === "Si") {
        //document.getElementById("containerCoupon").innerHTML = '<div id="containerCoupon"><input type="text" id="inputCoupon" placeholder="Codigo del cupon"></div>';
        document.getElementById("containerCoupon").innerHTML = '<div class="form">'
                                                                +    '<input type="text" name="text" autocomplete="off" required id="inputCoupon"/>'
                                                                +    '<label for="text" class="label-name">'
                                                                +        '<span class="content-name">'
                                                                +            'Cupon'
                                                                +        '</span>'
                                                                +    '</label>'
                                                                +'</div>';
    } else{
        document.getElementById("containerCoupon").innerHTML = '<div id="containerCoupon"></div>';
    }
}

function buttonPriceDiscount(){
    const optionsCoupon = document.getElementById("optionCoupon").value;
    const result = document.getElementById("resultPrice");
    const price = parseInt(document.getElementById("inputPrice").value);
    const discount = parseInt(document.getElementById("inputDiscount").value);
    var precioConDesceunto;

    if(optionsCoupon === "Si") {
        const couponValue = document.getElementById("inputCoupon").value;
        const isCouponValueValid = function(coupon) {
            return coupon.name === couponValue;
        };
        const userCoupon = coupons.find(isCouponValueValid);
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
            result.innerText = "El precio con descuento son: $";
            return 0;
        } else {
            precioConDesceunto = calcularPrecioConDescuento(price, discount + userCoupon.discount);
        }
    } else {
        precioConDesceunto = calcularPrecioConDescuento(price, discount);
    }
    
    result.innerText = "El precio con descuento son: $" + precioConDesceunto;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/