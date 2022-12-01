console.log(salarios);

//Analisis personal para Juanita



function encontrarPersona(personaEnBusqueda){
   return salarios.find(persona => persona.name == personaEnBusqueda);
   
    // const persona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda;
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    //console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcetajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcetajesCrecimiento.push(porcentajeCrecimiento);           
    }

    const medianaPorcentajesCrecimiento = Platzimath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

// Análisis empresarial
/* {
    Industrias Mokepon {
        2018: [salario, salario, salario]
        2019:
        2020:
        2021:
    },
    Lets Corp {},
    Umbrella company {},    
} */

const empresas = {};

for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
    }else if (!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año');

    }else{
        return Platzimath.calcularMediana(empresas[nombre][year]);
    }
}
function proyeccionPorEmpresa(){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
    }else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        })

        let porcetajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++){
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcetajesCrecimiento.push(porcentajeCrecimiento);           
        }

        const medianaPorcentajesCrecimiento = Platzimath.calcularMediana(porcentajesCrecimiento);

        const ultimoSalario = trabajos[listaMedianaYears.length - 1];
        const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimoSalario + aumento;

        return nuevaMediana;
    }
}

//Anaisis general
function medianaGeneral(){
    const listaMedianas = salarios.map((persona)=> medianaPorPersona(persona.name));
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;    
}

function medianaTop10(){
    const listaMedianas = salarios.map((persona)=> medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    
    const catidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - catidad;
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
   // slice
   //splice
    const mediaTop10 = PlatziMath.calcularMediana(top10);
    return mediaTop10;
    
}