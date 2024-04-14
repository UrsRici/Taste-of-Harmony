<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $pwd = $_POST["password"];
    try {
        require_once "../connect.php";
        require_once "login_model.php";
        require_once "login_contr.php";
        
        // EARAROR HANDLERS
        $errors = [];

        if (is_input_empty($email, $pwd)) {
            $errors["empty_input"] = "Fill in all fields!";
        }
        if (is_email_correct($pdo, $email)) {
            $errors["wrong_email"] = "Incorrect email!";
        }
        if (is_password_correct($pdo, $email, $pwd)) {
            $errors["wrong_password"] = "Incorrect password!";
        }

        if ($errors) {
            echo json_encode($errors);
        } else {
            $login_info = get_userData($pdo, $email);
            unset($login_info["password"]);
            echo json_encode($login_info);

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