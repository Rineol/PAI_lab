<?php session_start();?>
<!DOCTYPE html>
<html>

<?php

if($_SESSION["success"]==2){
    echo nl2br("Udało się dodać pracownika.\n");
    $_SESSION["success"]=0;
}


 $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
 if (!$link) {
 printf("Connect failed: %s\n", mysqli_connect_error());
 exit();
 }
 $sql = "SELECT * FROM pracownicy";
 $result = $link->query($sql);
 foreach ($result as $v) {
 echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";
 }
 $result->free();
 $link->close();
?>
<a href="form06_post.php">Wróć do formularza</a>
</html>