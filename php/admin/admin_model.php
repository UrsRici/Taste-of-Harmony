<?php

declare(strict_types=1);

function get_users(object $pdo)
{
    $query = "SELECT id, name, email, role FROM user;";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function get_products(object $pdo)
{
    $query = "SELECT * FROM products;";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function get_reservations(object $pdo)
{
    $query = "SELECT * FROM reservations;";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function set_user(object $pdo, string $username, string $pwd, string $email, string $role)
{
    $pwd = password_hash($pwd, PASSWORD_DEFAULT);
    $query = "INSERT INTO user (name, email, password, role) VALUES (:name, :email, :pwd, :role);";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":name", $username);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":pwd", $pwd);
    $stmt->bindParam(":role", $role);
    $stmt->execute();

}

function delete_user(object $pdo, string $id)
{
    $query = "DELETE FROM user WHERE id = :id;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->execute();
}

function update_user(object $pdo, string $id, string $username, string $email, string $role)
{
    $query = "UPDATE user SET name = :name, email = :email, role = :role WHERE id = :id;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":name", $username);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":role", $role);

    $stmt->execute();

}