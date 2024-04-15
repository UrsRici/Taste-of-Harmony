<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    try{
        require_once '../connect.php';
        require_once 'menu_model.php';
        require_once 'menu_contr.php';

        $products = get_products($pdo);
        echo json_encode($products);

    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
else{
    header("Location: ../../Home.html");
    die();
}