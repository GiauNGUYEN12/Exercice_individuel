<?php 
session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="" method="post">

<p>Votre nom : <input type="text" name="first_name" /></p>
<p><input type="submit" value="OK"></p>
<p><a href="http://localhost:8888/session.php"><button type="button">Reset</button></a></p>


</form>
    <?php
    $_SESSION["first_name"] = "Ada";
    print_r($_SESSION);
    session_unset();
    if (isset($_GET["first_name"])){
        echo "Bonjour". ' '. $_GET["first_name"];

    } else if (isset ($_POST["first_name"])){
        echo "Bonjour". ' '. $_POST["first_name"];

    } else if ( !isset( $_SESSION["first_name"] ) ) {
        //affiche le resultat
        echo " anonyme ! ";

    } else {
        //affiche le resultat
        echo "Bonjour". ' '. $_SESSION["first_name"];
    }
    
    ?>
</body>
</html>