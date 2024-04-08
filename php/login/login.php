<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST["username"];
    //$email = $_POST["email"];
    $pwd = $_POST["password"];
    try {
        require_once "../connect.php";
        require_once "login_model.php";
        require_once "login_contr.php";
        
        // EARAROR HANDLERS
        $errors = [];

        if (is_input_empty($username, $pwd)) {
            $errors["empty_input"] = "Fill in all fields!";
        }
        if (is_username_correct($pdo, $username)) {
            $errors["wrong_username"] = "Incorrect username!";
        }
        if (is_password_correct($pdo, $username, $pwd)) {
            $errors["wrong_password"] = "Incorrect password!";
        }

        if ($errors) {
            echo json_encode($errors);
        } else {
            
            

            $signup_info = get_userData($pdo, $username);
            unset($signup_info["password"]);
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