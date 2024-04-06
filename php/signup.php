<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $password = password_hash($password, PASSWORD_DEFAULT);
    try {
        require_once "connect.php";

        $query = "INSERT INTO user (name, email, password) VALUES (:name, :email, :password);";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":name", $username);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":password", $password);

        $stmt->execute();

        $pdo = null;
        $stmt = null;
        header("Location: ../login.html");
        die();

    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
else{
    header("Location: ../login.html");
}