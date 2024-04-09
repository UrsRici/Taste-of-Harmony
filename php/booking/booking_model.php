<?php

declare(strict_types=1);

// seteaza rezervarea
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

// returneaza id-ul use-rului
function get_userId(object $pdo, string $name)
{
    $query = "SELECT id FROM user WHERE name = :name;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result["id"];
}

// returneaza roare rezervariel de la o anumita data si ora
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

// returneaza capacitatea maxima a restaurantului
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

// returneaza id-ul rezervari dupa ce a fost inserata
function get_reservation_id(object $pdo, array $data)
{
    $query = "SELECT id FROM reservations WHERE date = :date AND time = :time AND persons = :persons;";
    
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":date", $data['date']);
    $stmt->bindParam(":time", $data['time']);
    $stmt->bindParam(":persons", $data['pers']);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

// returneaza id-urile meselor libere de la o anumita data si ora
function get_tables_id(object $pdo, string $date, string $time)
{
    $query = "SELECT t.id
    FROM tables t
    WHERE t.id NOT IN (
        SELECT rt.tables_id
        FROM reservations_tables rt
        JOIN reservations r ON rt.reservations_id = r.id
        WHERE r.date = :date AND r.time = :time
    );";
    
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":date", $date);
    $stmt->bindParam(":time", $time);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

// seteaza mesele rezervari facute
function set_reservations_tables(object $pdo, array $data)
{
    $tables_id = get_tables_id($pdo, $data['date'], $data['time']);
    $reservation_id = get_reservation_id($pdo, $data);

    for ($i = 0; $i < $data['pers']/2; $i = $i + 1) 
    {
        $query = "INSERT INTO reservations_tables (reservations_id, tables_id) VALUES (:reservations_id, :tables_id);";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":reservations_id", $reservation_id['id']);
        $stmt->bindParam(":tables_id", $tables_id[$i]['id']);
        $stmt->execute();
    }
}