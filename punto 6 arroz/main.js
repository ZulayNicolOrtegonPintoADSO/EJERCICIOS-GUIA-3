let next = document.getElementById('next'); 
let back = document.getElementById('back');
let rta = document.getElementById('rta');

next.addEventListener('click' , seguir);
back.addEventListener('click' , devolver);

let listp = [0 ," 1. Coloca el aceite en una olla grande a fuego bajo. Sofríe los tres pimentones picados, el ajo y la cebolla cabezona y revuelve hasta que tomen un color doradito." , "2. Agrega las 3 tazas de arroz, lo importante es revolver muy bien." , "3. Añade las 5 tazas de agua, las verduras en trocitos, las pechugas de pollo, el cubo de caldo de pollo, el sobre de sazón y la sal al gusto. Revuelve y deja cocinar a fuego medio por aproximadamente 15 minutos o hasta que se seque el arroz." , " 4. Una vez que el arroz haya absorbido toda el agua tapa la olla y cocina a fuego bajo por 10 a 15 minutos más hasta que el arroz esté suave." , "LISTO, DISFRUTA TU ARROZ CON POLLO"]
let posicion = 0

function seguir(){
    posicion += 1
    if(posicion <= 5){
        rta.innerText = listp[posicion]
    }
}

function devolver(){
    posicion -= 1
    if(posicion > 0){
        rta.innerText = listp[posicion]
    }
}

buton