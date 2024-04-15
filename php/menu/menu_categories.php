<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    try{
        require_once '../connect.php';
        require_once 'menu_model.php';
        require_once 'menu_contr.php';

        $categories = get_categories($pdo);
        echo json_encode($categories);
        
    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
else{
    header("Location: ../../Home.html");
    die();
}