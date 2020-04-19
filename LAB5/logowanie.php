<?php session_start(); ?>
<?php

require 'funkcje.php';
 if(isSet($_POST['submit']))
 {
     //global $zalogowany;
     $login=$_POST['login'];
     $haslo=$_POST['haslo'];
 
     
     if($login == $osoba1->login && $haslo == $osoba1->haslo)
     {
        $_SESSION["zalogowanyImie"]=$osoba1->imieNazwisko;
        $_SESSION["zalogowany"]=1;
         echo "1";
         header("Location: user.php");
     }
     else if($login == $osoba2->login && $haslo == $osoba2->haslo)    
     {
        $_SESSION["zalogowanyImie"]=$osoba2->imieNazwisko;
        $_SESSION["zalogowany"]=1;
         echo "2";
         header("Location: user.php");
     }
     else
     {
         header("Location: index.php");
     }
     
 }
 
 

?>
    

    
