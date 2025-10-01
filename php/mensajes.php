<?php
    include 'config.php';

    $conexion=mysqli_connect($ip,$user,$contra,$db);
    if($conexion == true){
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nombre = $_POST['name'];
            $mensaje = $_POST['message'];
            $query = "insert into mensajes(nombre,mensaje) values('$nombre',' $mensaje')";
            $resultado=mysqli_query($conexion,$query);
            header("Location: " . $_SERVER['PHP_SELF']);
            exit();
        }
    }
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8" lang="es">
    <meta name="viewport" content="width=device-width">     <!--Para adaptar la pantalla al dispositivo-->

    <meta name="robots" content="index, follow">        <!--Para indexar la pagina y seguir los enlaces-->
    <meta name="theme-color" content="#8f7ada">            <!--Para poner el color del buscador-->

    <!--Herramientas de SEO-->
    <meta name="description" content="Eski eres la mejor">
    
    <!--Para el OPEN GRAPH-->
    <meta property="og:title" content="La biografia de la niña de mis ojos">
    <meta property="og:description" content="Para demostrarte lo muchísimo que te queremos todos">
    <link rel="icon" href="../images/rana_eski.png" type="image/x-icon"> <!--Para poner icono a la pagina-->
    <meta property="og:image" content="../images/icono.png"> <!--Para poner icono a la pagina-->
    <meta property="og:image-alt" content="Fotografia mia">

    <!--Para que cambie el idioma-->
    <link rel="alternate" href="../index.html/en" hreflang="es-GB">
    <!--Para indicar cual es la pagina principal-->
    <link rel="canonical" href="../index.html">
    <title>Te queremos</title>
    <link rel="stylesheet" href="../assets/css/styles_mansajes.css">
    <style>
        @font-face {
            font-family: "mansalva";
            src: url("../assets/webfonts/Mansalva-Regular.ttf");
        }

        @font-face {
            font-family: "mclaren";
            src: url("../assets/webfonts/McLaren-Regular.ttf");
        }

        body{
            background-color: #F8EFCA;
        }

        .nav{
            background-color: #5D2655;
            height: 60px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            top: 0;
            left: 0;
            position: fixed;
            width: 100%;
            box-shadow: 0px 0px 9px 0px #5D2655;
            z-index: 100;
        }

        .enlaces{
            text-decoration: none;
            padding: 7px;
            border-radius: 5px;
            transition-duration: 0.7s;
            color: #F2A082;
            font-size: 20px;
            font-weight: bold;
            font-family: "mansalva";
        }

        .enlaces:hover{
            background-color: #380c32;
            scale: 1.1;
        }

        .seccion{
            margin: 50px 100px 40px 100px;
            background-color: #f2a082;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 5px 5px 4px 0px #e27c57;
            margin-top: 80px; 
            width: 20%;
            align-self: center;
            font-family: "mclaren";
        }

        .formulario{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .preguntas{
            width: 100%;
        }

        .preguntas label{
            width: 100%;
            align-self: flex-end;
        }

        .input-style {
            padding: 10px;
            border: 2px solid #f2a082;
            border-radius: 5px;
            font-size: 16px;
            color: #555;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            font-family: "mclaren";
        }

        .input-style:focus {
            border-color: #f16836;
            box-shadow: 0 0 0 0.2rem #f1683634;
        }

        /* From Uiverse.io by Voxybuns */ 
        button {
        /* Variables */
            --button_radius: 0.75em;
            --button_color: #e8e8e8;
            --button_outline_color: #000000;
            font-size: 12px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: var(--button_radius);
            background: var(--button_outline_color);
        }

        .button_top {
            display: block;
            box-sizing: border-box;
            border: 1px solid var(--button_outline_color);
            border-radius: var(--button_radius);
            padding: 0.75em 1.5em;
            background: var(--button_color);
            color: var(--button_outline_color);
            transform: translateY(-0.2em);
            transition: transform 0.1s ease;
            font-family: "mclaren";
        }

        button:hover .button_top {
            /* Pull the button upwards when hovered */
            transform: translateY(-0.33em);
        }

        button:active .button_top {
            /* Push the button downwards when pressed */
            transform: translateY(0);
        }

        #lista{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin: 10px 100px 100px 100px;
            padding: 20px;
            width: 80%;
            gap: 12px;
            box-sizing: border-box;
            background-color: #F8DEAD;
            border: 7px solid #F2A082;
            border-radius: 10px;
        }

        .mensaje{
            display: flex;
            flex-direction: column;
            padding: 10px;
            background-color: #f2a082;
            box-shadow: 3px 3px 2px 0px #e27c57;
            /* background-image: url("../images/postit.png");
            background-size: cover; para cubrir todo el div
            background-position: center; */
            border-radius: 10px;
            width: 300px;
            align-items: center;
            justify-content: flex-start;
            height: 250px;
        }

        .mensaje h2{
            font-family: "mansalva";
            font-size: 27px;
            font-weight: bold;
        }

        .mensaje p{
            width: 300px;
            text-align: center;
            height: auto;
            overflow-wrap: break-word;
            font-family: "mclaren";
            font-size: 16px;
        }
        
        .raya{
            height: 0px;
            width: 80%;
            align-items: center;
            border: 1px solid #5D2655;
            border-radius: 20px;
        }
    </style>
</head>
<body>
    
    <header>
        <nav class="nav">
            <a href="../index.html" class="enlaces">FORM</a>
            <a href="../htmls/fotos.html" class="enlaces">MEMORIES</a>
            <a href="../htmls/tequiero.html" class="enlaces">AMORE</a>
        </nav>
    </header>
    <main style="display: flex; flex-direction: column; align-items: center; ">
        <section class="seccion">
            <form class="formulario" action="mensajes.php" method="post" class="form">
                <div class="preguntas">
                    <label for="nombre">Nombre: </label><br>
                    <input class="input-style" id="nombre" type="text" name="name" placeholder="TuMorenito69" required><br><br>

                    <label for="mensaje">Mensaje: </label><br>
                    <input class="input-style" id="mensaje" type="text" name="message" placeholder="Eterna perdedora en el Mario Kart" required><br><br>
                </div>
                <button type="submit"><span class="button_top">Enviar</span></button>
            </form>
        </section>
        <section id="lista">
            <?php
                include 'config.php';
                $conn = new mysqli($ip, $user, $contra, $db);

                // Verificar conexión
                if ($conn->connect_error) {
                    die("Error de conexión: " . $conn->connect_error);
                }
                $sql = "SELECT * FROM mensajes";
                $resultado = $conn->query($sql);

                // Mostrar los resultados
                if ($resultado->num_rows > 0) {
                    while ($fila = $resultado->fetch_assoc()) {
                        echo "<div class='mensaje'>";
                        echo "<h2>" . htmlspecialchars($fila['nombre']) . "</h2>";
                        echo "<div class='raya'></div>";
                        echo "<p>" . htmlspecialchars($fila['mensaje']) . "</p>";
                        echo "</div>";
                    }
                } else {
                    echo "No hay mensajes :(";
                }

                // Cerrar conexión
                $conn->close();
            ?>
        </section>
    </main>
    <footer>

    </footer>
</body>
