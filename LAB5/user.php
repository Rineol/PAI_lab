<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8'/>
    </head>
    <body>
    <a href="index.php"> MAIN PAGE </a>
</n>
    <?php      
         
        require_once 'funkcje.php';
        if($_SESSION["zalogowany"] != 1) 
        { 
            header("Location: index.php"); 
        }

        
        echo nl2br("\n" . "Zalogowano: " . $_SESSION["zalogowanyImie"] . "\n");
    
        if(isSet($_POST["uploadFile"])) {

        $currentDir = getcwd();
        $uploadDirectory = "/zdjeciaUzytkownikow/";
        $fileName = $_FILES['myfile']['name'];
        $fileSize = $_FILES['myfile']['size'];
        $fileTmpName = $_FILES['myfile']['tmp_name'];
        $fileType = $_FILES['myfile']['type'];
        if($fileName != "" and
                ($fileType == 'image/png' or $fileType == 'image/jpeg'
                or $fileType == 'image/JPEG'or $fileType == 'image/PNG'

        ))
        {
            $uploadPath = $currentDir . $uploadDirectory . $fileName;
            if(move_uploaded_file($fileTmpName, $uploadPath))
                echo "Zdjęcie zostało załadowane na serwer FTP";
        }

        if(isSet($_POST["uploadFile"]))
        {
            echo '<img src="5p.jpg"  />';
        }
        else{
            echo 'Jeszcze nie ma wgranego zdjęcia.';
        }

    }

    ?>

        


         <form action="index.php" method="post">
         <input type="submit" value="Wyloguj" name="logout">
         </form>

         <form action='user.php' method='POST' enctype='multipart/form-data'>
         <input name="myfile" type="file">
         <input type="submit" value="Zapisz" name="uploadFile">
    </form>
</body>
</html>