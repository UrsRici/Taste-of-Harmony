<?php

declare(strict_types=1);

function set_reservation(object $pdo, array $data) 
{
    $data["id"] = get_userId($pdo, $data["name"]);

    $query = "INSERT INTO reservations (user_id, phone, date, time, message, persons) VALUES (:user_id, :phone, :date, :time, :message, :persons);";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":user_id", $data["id"]);
    $stmt->bindParam(":phone", $data["phon"]);
    $stmt->bindParam(":date", $data["date"]);
    $stmt->bindParam(":time", $data["time"]);
    $stmt->bindParam(":message", $data["mess"]);
    $stmt->bindParam(":persons", $data["pers"]);
    $stmt->execute();
}

function get_userId(object $pdo, string $name)
{
    $query = "SELECT id FROM user WHERE name = :name;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result["id"];
}

function get_reservations(object $pdo, string $date, string $time)
{
    $query = "SELECT * FROM reservations WHERE date = :date AND time = :time;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":date", $date);
    $stmt->bindParam(":time", $time);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
} 

function max_capacity(object $pdo)
{
    $query = "SELECT * FROM tables;";

    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $capacity = 0;
    foreach ($result as $row) {
        $capacity = $capacity + $row['capacity'];
    }
    return ($capacity);
}