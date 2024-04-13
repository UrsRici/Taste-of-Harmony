<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    require_once "../connect.php";
    require_once "booking_model.php";
    require_once "booking_contr.php";

    if (isset($_POST['action'])) {
        
        $date = $_POST["date"];
        $times = get_times($pdo, $date);
        
        echo json_encode($times);

    } else {

        $data["name"] = $_POST["name"];
        $data["phon"] = $_POST["phone"];
        $data["date"] = $_POST["date"];
        $data["time"] = $_POST["time"];
        $data["mess"] = $_POST["message"];
        $data["pers"] = $_POST["number_people"];

        try {

            // EARAROR HANDLERS
            $errors = [];

            if (is_input_empty($data["phon"], $data["date"], $data["time"])) {
                $errors["empty_input"] = "Fill in all fields!";
            }
            if (is_phon_invalid($data["phon"])){
                $errors["invalid_phon"] = "Incorrect phone number!";
            }
            if (!is_table_available($pdo, $data)){
                $errors["no_table"] = "No tables available!";
            }

            if ($errors) {
                $errors = json_encode($errors);
                echo $errors;
            } else {
                
                set_reservation($pdo, $data);
                set_reservations_tables($pdo, $data);

                $data = "Reservation registered successfully!";
                echo json_encode($data);
            }

        } catch (PDOException $e) {
            die("Query feiled: " . $e->getMessage());
        }
    }
}
else{
    header("Location: ../../login.html");
    die();
}