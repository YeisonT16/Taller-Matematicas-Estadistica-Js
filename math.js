console.group('Cuadrado')

const ladoCuadrado = 5;
perimetroCuadrado = ladoCuadrado * 4;
areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area:lado * lado,
    };
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;



function calcularTriangulo(lado1,lado2,base,altura){
    return {
        perimetro: lado1 + lado2 + base,
        area:(base * altura) / 2,
    };
}

function calcularalturaTriangulo(lado1, base){
    if (lado1 == base){
        console.warn('Este no es un triangulo isosceles');
    }else{
        //h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4).toFixed(4);
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
})

console.groupEnd('Triangulo');

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;


const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    PI,
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio){
const diametro = radio * 2;
const radioAlCuadrado = Math.pow(radio, 2);

    return{
        circunferencia: diametro * Math.PI.toFixed(4),
        area: radioAlCuadrado * Math.PI.toFixed(5),
    };

}

console.groupEnd('Circulo');