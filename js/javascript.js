
function primerAlerta(){
    alert('Bienvenido a mi Pagina Web');

}

function haceclic(){
    document.getElementById('btn').onclick=primerAlerta;

}

window.onload=haceclic;