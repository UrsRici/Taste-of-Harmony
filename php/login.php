<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    try {
        require_once "connect.php";

        $query = "SELECT * FROM user WHERE name=:username;";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":username", $username);
        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $result = $result[0];
        $pws = $result["password"];
        echo $pws;
        echo "<br>";
        echo $password;
        if(password_verify($password, $pws)){
            echo "True";
        }else{
            echo "False";
        }

        /*$pdo = null;
        $stmt = null;
        header("Location: ../login.html");
        die();*/

    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
/*else{
    header("Location: ../login.html");
}*/