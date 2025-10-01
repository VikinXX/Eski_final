const resultados = [
    {
        "ganadora" : "Eski suit oufit",
        "descripcion" : "Tu signo del zodiaco es Cáncer. Te gusta comerte los mocos, te quitas la piel muerta de los pies con las uñas que llevas sin cortarte desde el Baby Boom. Si fuese tu donaria tu cuerpo a la ciencia.",
        "url" : "images/formulario/suit.jpg"
    },{
        "ganadora" : "Eski ravera",
        "descripcion" : "Tu signo del zodiaco es Tauro. No has cenao, tus amigos te han tenido que ayudar más veces de las que te gustaría admitir y has ido más en ambulancia que en uber.",
        "url" : "images/jara/9.jpg"
    },{
        "ganadora" : "Eski estilista",
        "descripcion" : "Tu signo del zodiaco es Leo. Te has instalado el Dress to Impress y desinstalado varias veces por no entender el juego ni ganar ni una partida, conoces a Eva Soriano y no a Noemí Argüelles.",
        "url" : "images/formulario/estilista.jpg"
    },{
        "ganadora" : "Eski glotona",
        "descripcion" : "Tu signo del zodiaco es Libra. Has desayunao hamburguesa, te gustan los tequeños con salsa de bbq y si te preguntasen cual seía tu última cena serían dos hamburguesas.",
        "url" : "images/formulario/glotona.jpg"
    },{
        "ganadora" : "EskiAndo",
        "descripcion" : "Tu signo del zodiaco es Géminis. Probablemente seas la puto mejor y tengas un novio que mola mazo. Escuchas Judeline y D.Valentino y te has metido por el culo el útimo disco de la Juicy.",
        "url" : "images/formulario/eskiando.jpg"
    },{
        "ganadora" : "Eski K-Poper",
        "descripcion" : "Tu signo del zodiaco es Aquarius. Sales a las 2am de baile porque estas on fire, de pequeña hacias bailes de K-Pop delante de todo el instituto, en tus cascos sueles tener a Stray Kids y te gustan los menores.",
        "url" : "images/formulario/bailarina.jpg"
    },{
        "ganadora" : "Eski ganadora",
        "descripcion" : "Tu signo del zodiaco es Aries. Seguramente ganes en la pachanga en el funeral de tu abuelo y lo celebres, no sepas perder y te enfades hasta que te duermes, aunque no ganarás nuunca al Mario Kart.",
        "url" : "images/nerea/15.jpg"
    }
];

const formulario = document.getElementById("quizForm");


// formulario.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const respuestas = new FormData(formulario);
//     let puntuacion = 0;

//     for (let [clave, valor] of respuestas.entries()) {
//         puntuacion += parseInt(valor, 10);
//     }

//     const resultadoDiv = document.getElementById('resultado');
//     resultadoDiv.style.display = 'flex';

//     let indice = Math.floor((puntuacion - 1) / 3); // para agrupar en bloques de 3

//     if (indice >= 0 && indice < resultados.length) {
//         const r = resultados[indice];
//         resultadoDiv.innerHTML = `
//             <div class="divresult">
//                 <h3 class="titulo">Resultado: ${r.ganadora}</h3>
//                 <p class="texto">${r.descripcion}</p>
//             </div>
//             <img class="imagen" src="${r.url}" loading="lazy">
//         `;
//     } else {
//         resultadoDiv.innerHTML = `<p class="texto">No se pudo calcular el resultado.</p>`;
//     }
// });

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const respuestas = new FormData(form);
    let puntuacion = 0;

    for (let [clave, valor] of respuestas.entries()) {
        puntuacion += parseInt(valor, 10);
    }
    document.getElementById('resultado').style.display = 'flex';
    if (puntuacion >= 1 && puntuacion <= 3) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[0].ganadora}</h3><p class="texto">${resultados[0].descripcion}</p></div><img class="imagen" src="${resultados[0].url}" loading="lazy">`;
    
    }else if (puntuacion >= 4 && puntuacion <= 6) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[1].ganadora}</h3><p class="texto">${resultados[1].descripcion}</p></div><img class="imagen" src="${resultados[1].url}" loading="lazy">`;
    
    }else if (puntuacion >= 7 && puntuacion <= 9) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[2].ganadora}</h3><p class="texto">${resultados[2].descripcion}</p></div><img class="imagen" src="${resultados[2].url}" loading="lazy">`;
    
    }else if (puntuacion >= 10 && puntuacion <= 12) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[3].ganadora}</h3><p class="texto">${resultados[3].descripcion}</p></div><img class="imagen" src="${resultados[3].url}" loading="lazy">`;
    
    }else if (puntuacion >= 13 && puntuacion <= 15) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[4].ganadora}</h3><p class="texto">${resultados[4].descripcion}</p></div><img class="imagen" src="${resultados[4].url}" loading="lazy">`;
    
    }else if (puntuacion >= 16 && puntuacion <= 18) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[5].ganadora}</h3><p class="texto">${resultados[5].descripcion}</p></div><img style="width: 70%; height:70%;" class="imagen" src="${resultados[5].url}" loading="lazy">`;
    
    }else if (puntuacion >= 19 && puntuacion <= 21) {
        document.getElementById('resultado').innerHTML = `<div class="divresult"><h3 class="titulo">Resultado: ${resultados[6].ganadora}</h3><p class="texto">${resultados[6].descripcion}</p></div><img class="imagen" src="${resultados[6].url}" loading="lazy">`;
    
    };
    document.getElementById('resultado').scrollIntoView({ behavior: "smooth" });
});