let dollar = document.getElementById("dollar");
let peso = document.getElementById("peso");

let convertir = document.getElementById("convertir");
let conversor = document.getElementById("conversor");
conversor.addEventListener('click', proceso)

function proceso(){
    let d = parseFloat(dollar.value);
    let p = parseFloat(peso.value);
    rta=0
    if(d >= 1 || p >= 1){
        if(d >= 1 && p >= 1){
            convertir.innerText="Señor usuario, solo dijite en un campo: \n PESOS o DOLLARES"
        }else{
            if(d >= 1){
                rta= d*4805,31
                convertir.innerText="La cantidad de dollares en pesos Colombianos es:"+ rta
            }
            if(p >= 1){
                rta= p/4805,31
                convertir.innerText="La cantidad de pesos Colombianos en dollares es:"+rta
            }
        }
    }else{
        convertir.innerText="Para que funciones debes poner \n Números Positivos"
    }
}