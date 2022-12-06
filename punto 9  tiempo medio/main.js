let tiempo = document.getElementById('tiempo');
let distancia = document.getElementById('distancia');

let  calcular = document.getElementById('calcular');
calcular.addEventListener('click' , proceso);

let rta = document.getElementById('rta');

let  seg = document.getElementById('seg');
let min = document.getElementById('min')
min.addEventListener('click' , convmin)

let  h = document.getElementById('h');
let min1 = document.getElementById('min1')
min1.addEventListener('click' , convhm)

let  m = document.getElementById('m');
let km = document.getElementById('km')
km.addEventListener('click' , convkm)

function proceso(){
    let time = parseFloat(tiempo.value);
    let dis = parseFloat(distancia.value);
    
    let pro = time/dis

    rta.innerText="El tiempo medio es de: " + pro + " min/km"
}

function convmin(){
    let segu = parseFloat(seg.value);

    let c1 =  segu / 60
    min.innerText= c1 + " min"
}

function convhm(){
    let hora = parseFloat(h.value);

    let c2 =  hora * 60
    min1.innerText= c2 + " min"
}

function convkm(){
    let  me = parseFloat(m.value);

    let c3 = me / 1000
    km.innerText = c3 + " km"
}