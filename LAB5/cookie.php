<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8'/>
    </head>
    <body>
    <?php
        require 'funkcje.php';
        if(isSet($_GET["cookie"]))
        {
            $timeCookie=$_GET["time"];
            //zamiast time $timeCookie ?
           if (setcookie("ciasteczko", "Smaczne ciasteczko", time() + $timeCookie, "/"))
           {
               echo "Dodano";
           }


        }

    ?>

<a href="index.php"> WSTECZ </a>
</body>
</html>