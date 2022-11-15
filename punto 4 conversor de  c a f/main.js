let c = document.getElementById("c");
let f = document.getElementById("f");

let convertir = document.getElementById("convertir");
let conversor = document.getElementById("conversor");
conversor.addEventListener('click', proceso);

function proceso(){
    let cen = parseFloat(c.value);
    let far = parseFloat(f.value);
    rta=0

    if(cen >= 0 && far >= 0){
        convertir.innerText="Señor usuario por favor solo diligencie un campo, Centígrados o Fahrenheit"
    }else{
        if(cen >= 0 || cen <= 0){
            rta= (cen*9/5)+32
            convertir.innerText="La converción de grados C a grados F es:" + rta
        }

        if(far >= 0 || far <= 0){
            rta= (far - 32) * 5/9
            convertir.innerText="La converción de grados F a grados C es:" + rta
        }
    }
}