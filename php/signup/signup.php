<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST["username"];
    $email = $_POST["email"];
    $pwd = $_POST["password"];

    try {
        require_once "../connect.php";
        require_once "signup_model.php";
        require_once "signup_contr.php";
        
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
            set_user($pdo, $username, $pwd, $email);

            $signup_info = "Thank you " . $username . " for signing up!";
            echo json_encode($signup_info);

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