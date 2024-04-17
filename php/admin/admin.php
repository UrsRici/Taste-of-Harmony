<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once '../connect.php';
    require_once 'admin_model.php';
    require_once 'admin_contr.php';

    if (isset($_POST['info'])) 
    {
        if ($_POST['info'] == 'edit_user') {

            $id = $_POST['id'];
            $new_username = $_POST['username'];
            $new_email = $_POST['email'];
            $new_role = $_POST['role'];

            update_user($pdo, $id, $new_username, $new_email, $new_role);

            $editUser_info = "The data was uptade!";
            echo json_encode($editUser_info);
        }
        if ($_POST['info'] == 'delete_user') {
            try {
                $id = $_POST['id'];
                delete_user($pdo, $id);
                $deleteUser_info = "User deleted successfully";
                echo json_encode($deleteUser_info);

            } catch (PDOException $e) {
                die("Query feiled: " . $e->getMessage());
            }
        }
        if ($_POST['info'] == 'add_user') {
            try {

                $username = $_POST["username"];
                $email = $_POST["email"];
                $pwd = $_POST["password"];
                $role = $_POST["role"];
                set_user($pdo, $username, $pwd, $email, $role);
        
                $addUser_info = "User added successfully";
                echo json_encode($addUser_info);
        
        
            } catch (PDOException $e) {
                die("Query feiled: " . $e->getMessage());
            }
        }
    } else {   
        try {
            $data = [];
            $data['users'] = get_users($pdo);
            $data['products'] = get_products($pdo);
            $data['reservations'] = get_reservations($pdo);
            echo json_encode($data);

        } catch (PDOException $e) {
            die("Query feiled: " . $e->getMessage());
        }
    }
} else {
    header("Location: ../../Home.html");
    die();
}