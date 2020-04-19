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
        
        echo  "<h1>Nasz system</h1>";

        if(isSet($_POST["logout"]))
        {
            $_SESSION["zalogowany"]=0;
        }

        if(isSet($_COOKIE["ciasteczko"])) {
            echo "1";
            echo $_COOKIE["ciasteczko"];
        }
        

    ?>
    
       <a href="user.php"> USER </a>

       <form action="logowanie.php" method="post">
        Login: <input type="text" name="login"><br>
        Hasło: <input type="text" name="haslo"><br>
        <input type="submit" value="Zaloguj" name="submit">
        </form>

        <form action="cookie.php" method="get">
        Czas: <input type="number" name="time"><br>
        <input type="submit" value="Utwórz cookie" name="cookie">
        </form>

</body>
</html>