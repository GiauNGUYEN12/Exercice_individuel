<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Gobale php</title>
</head>
<body>
<form action="" method="post">

 <p>Votre nom : <input type="text" name="first_name" /></p>
 <p><input type="submit" value="OK"></p>

</form>

    <?php
if(isset($_GET['first_name'])) 
    {
    echo "Bonjour" .' '. $_GET['first_name'];
}
else if (isset($_POST['first_name']))
    {
    echo "Bonjour" .' '. $_POST['first_name'];
}
else {
        echo "anonyme";
    }
    ?>

</body>
</html>