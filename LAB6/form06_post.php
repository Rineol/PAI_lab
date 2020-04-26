<?php session_start();?>

<?php

if($_SESSION["success"]==1){
    echo("Nie udało się dodać pracownika. Popraw dane.");
    $_SESSION["success"]=0;
}

?>



<!DOCTYPE html>
 <html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
 </head>
 <body>
 <form action="form06_redirect.php" method="POST">
 ID PRACOWNIKA <input type="text" name="id_prac">
 NAZWISKO <input type="text" name="nazwisko">
 <input type="submit" value="Wstaw">
 <input type="reset" value="Wyczysc">
 </form>
 <a href="form06_get.php"> PRACOWNICY </a>
</body>
</html>

 