const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Si solo quieres que se active una vez:
        observer.unobserve(entry.target);
    }
    });
}, {
    threshold: 0.1 // Ajusta el porcentaje de visibilidad necesario
});

function todo(){
    let user = document.getElementById('user').value;
    let passwd = document.getElementById('passwd').value;
    
    if (user == 'Xuxeski' && passwd == '10722') {
        const contenedor = document.getElementById('main');
        contenedor.innerHTML = `<section class="seccion1">
            <h2>Cosas que me gustan de ti</h2>
            <ol class="ristra">
                <li>Tus ojos</li>
                <li>Tu sonrisa</li>
                <li>Lo torpe que eres</li>
                <li>Lo despistada</li>
                <li>Tu cariño</li>
                <li>La forma en la que me miras</li>
                <li>Lo buena que eres</li>
                <li>Lo perfecta que eres</li>
                <li>Que contigo se puede hablar de todo</li>
                <li>Como me tratas</li>
                <li>Lo muchísimo que te quieren tus seres cercanos</li>
                <li>Que eres resolutiva</li>
                <li>Tienes mucha paciencia</li>
                <li>Que eres independiente</li>
                <li>Que me entiendes</li>
                <li>Que intentas entenderme</li>
                <li>Lo bien que escuchas</li>
                <li>Como compaginamos nuestras vidas</li>
                <li>Cuando hablas</li>
                <li>Cuando me hablas de cosas que te gustan</li>
                <li>Chismear contigo</li>
                <li>Poder opinar libremente de cosas que no son habituales</li>
                <li>Lo bien que juegas a todo</li>
                <li>Cuando jugamos</li>
                <li>Lo tímida que eres</li>
                <li>Cuando te pones chula</li>
                <li>Tus labios</li>
                <li>Y los de arriba</li>
                <li>La música que escuchas</li>
                <li>Cuando me cuentas cosas de tu pasado</li>
                <li>Cuando hablamos de cosas para hacer</li>
                <li>Que me recuerdas al verano</li>
                <li>Cuando te veo después de unos días sin vernos</li>
                <li>Que eres tan liada como yo</li>
                <li>La seguridad que me transmites</li>
                <li>Tu culo</li>
                <li>Cuando sales de fiesta y me envías fotos</li>
                <li>Cuando nos vestimos complementariamente</li>
                <li>Que tu color favorito sea el más feo</li>
                <li>Cuando comes</li>
                <li>Cuando cocinas</li>
                <li>Salir de fiesta contigo</li>
                <li>Tener una excusa para verte</li>
                <li>Hacerte la comida</li>
                <li>Cuidarte</li>
                <li>Verte bailar</li>
                <li>Cuando recuerdo que fuiste K-Poper</li>
                <li>Cuando estamos en la misma nota</li>
                <li>Que no se te vayan las ganas de nada</li>
                <li>Hacerte reir</li>
                <li>Verte reir</li>
                <li>Verte con tus amigas</li>
                <li>Cuando me mandas un mensaje</li>
                <li>Cuando me mandas una foto de 1</li>
                <li>Cuando fardas de mí en insta</li>
                <li>Cuando hablas de mi en una fiesta</li>
                <li>Cuando te picas por perder</li>
                <li>Cuando haces que me pique por ganar</li>
                <li>Cuando sacas la lengua</li>
                <li>Tu tripa</li>
                <li>Tu piel</li>
                <li>Cuando me cuentas tu día</li>
                <li>Cuando te aprendes las cosas que hago</li>
                <li>Que intentes hacer cosas que me gustan</li>
                <li>Cuando me dejas hacerte mansplaining</li>
                <li>Cuando te encanta una canción</li>
                <li>Cuando te quejas</li>
                <li>Cuando me dejas ropa</li>
                <li>Cuando te vistes con mi ropa</li>
                <li>Cuando llegas a mi casa como si fuese tuya</li>
                <li>Tus storytimes</li>
                <li>El asco que me da tu feed de tiktok</li>
                <li>TE AMO</li>
            </ol>
        </section>
        <section class="seccion2">
            <h2>Tu novio</h2>
            <div class="imagenes" id="imagenes">
                <img class="imagen" src="../images/mias/1.jpg" alt="Foto del usuario" loading="lazy">
                <img class="imagen" src="../images/mias/2.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/3.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/4.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/5.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/6.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/7.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/8.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/9.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/10.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/11.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/12.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/13.jpg" alt="" loading="lazy">
                <div class="div1">
                    <img class="imagen" src="../images/mias/14.jpg" alt="" loading="lazy">
                    <img class="imagen" src="../images/mias/15.jpg" alt="" loading="lazy">
                </div>
                <img class="imagen" src="../images/mias/16.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/17.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/18.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/19.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/20.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/21.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/22.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/23.jpg" alt="" loading="lazy">
                <div class="div1">
                    <img class="imagen" src="../images/mias/24.jpg" alt="" loading="lazy">
                    <img class="imagen" src="../images/mias/25.jpg" alt="" loading="lazy">
                </div>
                <img class="imagen" src="../images/mias/26.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/27.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/28.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/29.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/30.jpg" alt="" loading="lazy">
                <div class="div1">
                    <img class="imagen" src="../images/mias/31.jpg" alt="" loading="lazy">
                    <img class="imagen" src="../images/mias/40.jpg" alt="" loading="lazy">
                </div>
                <img class="imagen" src="../images/mias/32.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/33.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/34.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/35.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/36.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/37.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/38.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/39.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/41.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/42.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/43.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/44.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/45.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/46.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/47.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/48.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/49.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/50.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/51.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/52.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/53.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/54.jpg" alt="" loading="lazy">
                <img class="imagen" src="../images/mias/55.jpg" alt="" loading="lazy">
            </div>
        </section>`;

        const nuevasImagenes = contenedor.querySelectorAll('.imagen');
        nuevasImagenes.forEach(img => observer.observe(img));
    }else{
        alert('Intentalo de nuevo');
    }
}