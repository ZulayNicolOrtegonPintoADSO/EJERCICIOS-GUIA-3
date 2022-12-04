let año = document.getElementById('año');

let calcular = document.getElementById('calcular');
calcular.addEventListener('click' , proceso);

function proceso(){
    let  a = parseFloat(año.value);
    if((a%4==0) && (a%100 !=0 || a%400==0)){
        calcular.innerText = "SI ES 🥳"
    }else{
        calcular.innerText = "NO ES 😕" 
    }
}
