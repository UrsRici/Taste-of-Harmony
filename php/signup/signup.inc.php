<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST["username"];
    $email = $_POST["email"];
    $pwd = $_POST["password"];

    try {
        require_once "../connect.inc.php";
        require_once "signup_model.inc.php";
        require_once "signup_contr.inc.php";
        
        // EARAROR HANDLERS
        $errors = [];

        if (is_input_empty($username, $pwd, $email)) {
            $errors["empty_input"] = "Fill in all fields!";
        }
        if (is_email_invalid($email)) {
            $errors["invalid_email"] = "Invalide email used!";
        }
        if (is_username_taken($pdo, $username)) {
            $errors["username_taken"] = "Username already taken!";
        }

        if ($errors) {
            $errors = json_encode($errors);
            echo $errors;
        } else {
            $pwd = password_hash($pwd, PASSWORD_DEFAULT);
            $query = "INSERT INTO user (name, email, password) VALUES (:name, :email, :pwd);";

            $stmt = $pdo->prepare($query);

            $stmt->bindParam(":name", $username);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":pwd", $pwd);
            $stmt->execute();

            $signup_info = "The account was created";
            echo json_encode($signup_info);

            $pdo = null;
            $stmt = null;
            die();
        }

    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
else{
    header("Location: ../../login.html");
    die();
}