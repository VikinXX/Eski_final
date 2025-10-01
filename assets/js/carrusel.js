let imagenes = [
    {
        "url" : "../images/monica/monica.jpg",
        "nombre" : "p1",
        "enlace" : "monica.html"
    },{
        "url" : "../images/jara/15.jpg",
        "nombre" : "p2",
        "enlace" : "jara.html"
    },{
        "url" : "../images/andrea/7.jpg",
        "nombre" : "p3",
        "enlace" : "andrea.html"
    },{
        "url" : "../images/nerea/26.jpg",
        "nombre" : "p4",
        "enlace" : "nerea.html"
    },{
        "url" : "../images/mireya/19.jpg",
        "nombre" : "p5",
        "enlace" : "mireya.html"
    },{
        "url" : "../images/gabo/3.jpg",
        "nombre" : "p6",
        "enlace" : "gabo.html"
    },{
        "url" : "../images/alba/8.jpg",
        "nombre" : "p7",
        "enlace" : "alba.html"
    }
]


let actual = 0;
let formulario = document.getElementById('formulario');

function atras(){
    let imagen = document.getElementById('imagenes');
    actual -= 1

    if (actual < 0) {
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <a class="enlace" href="${imagenes[actual].enlace}" style="display: inline-block;"><img src="${imagenes[actual].url}" alt="" loading="lazy" style="display: block; width: 100%; height: 100%; border-radius: 30px;"></a>`
}

function alante(){
    let imagen = document.getElementById('imagenes');
    actual += 1

    if (actual >= imagenes.length) {
        actual = 0
    }

    imagen.innerHTML = ` <a class="enlace" href="${imagenes[actual].enlace}" style="display: inline-block;"><img src="${imagenes[actual].url}" alt="" loading="lazy" style="display: block; width: 100%; height: 100%; border-radius: 30px;"></a>`
}

formulario.addEventListener("submit", function(event){
    const mensaje = {
        nombre : formulario.name.value,
        mensaje : formulario.message.value
    };

    alert(mensaje)

    mensajes.push(mensaje)
    mostrarMensajes()
    formulario.reset()
})

// Ctrl + K + C para comentar, Ctrl + K + U para descomentar

