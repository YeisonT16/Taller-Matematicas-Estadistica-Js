const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#discount');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);




  /*
  function calcularPrecioConDescuento(){
    // (p * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);


    if(!price || !discount){
        pResult.innerText = '¡CHANCLA, por favor llena el formulario!';
        return;
    };
    if(discount > 100){
        pResult.innerText = '¡Ajá, ya quicieras, no te vamos a dar plata, PAGA!'
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice;
}
*/

/*
class coupon
{
    constructor
    ({
        name,
        discount,
    })
    {
        this.name = name;
        this.discount = discount;
    }
}

const maxDiscount = new coupon({
    name: 'Max_discount',
    discount: 50,
});

const mediumDiscount = new coupon({
    name: 'Medium_discount',
    discount: 25,
});

const minDiscount = new coupon({
    name: 'mini_Discount',
    discount: 10,
})
*/

const couponsList = [];

couponsList.push({
    name: 'Max_discount',
    discount: 50,
});

couponsList.push({
    name: 'Medium_discount',
    discount: 30,
}) 

couponsList.push({
    name: 'Min_discount',
    discount: 15,
}) 


function calcularPrecioConDescuento(){
    // (p * (100 - D)) / 100
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    
    if(!price || !coupon){
        pResult.innerText = '¡CHANCLA, por favor llena el formulario!';
        return;
    };
    if(coupon > 100){
        pResult.innerText = '¡Ajá, ya quicieras, no te vamos a dar plata, PAGA!'
        return;
    }

    let discount;

    function isCouponInArray(couponElement) {  //{name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray); // [{}]

    if(couponInArray){
        discount = couponInArray.discount;
    }else{
        pResult.innerText = '¡El cupon no es valido!';         
    }





    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice;
}



/*
let discount;

switch (coupon){
    case 'JuanDC_es_Batman':
        discount = 30;
        break;
    case 'no_le_digas_a_nadie':
        discount = 25;
        break; 
    default:
        pResult.innerText = '¡El cupón no es válido!';
        return;

}
*/