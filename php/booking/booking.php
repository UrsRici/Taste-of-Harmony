<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data["name"] = $_POST["name"];
    $data["phon"] = $_POST["phone"];
    $data["date"] = $_POST["date"];
    $data["time"] = $_POST["time"];
    $data["mess"] = $_POST["message"];
    $data["pers"] = $_POST["number_people"];

    try {
        require_once "../connect.php";
        require_once "booking_model.php";
        require_once "booking_contr.php";
        $data = json_encode($data);
        echo $data;



    } catch (PDOException $e) {
        die("Query feiled: " . $e->getMessage());
    }
}
else{
    header("Location: ../../login.html");
    die();
}