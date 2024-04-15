<?php

declare(strict_types=1);

function get_username(object $pdo, string $username)
{
    $query = "SELECT name FROM user WHERE name = :username;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function get_email(object $pdo, string $email)
{
    $query = "SELECT email FROM user WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function set_user(object $pdo, string $username, string $pwd, string $email)
{
    $pwd = password_hash($pwd, PASSWORD_DEFAULT);
    $query = "INSERT INTO user (name, email, password) VALUES (:name, :email, :pwd);";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":name", $username);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":pwd", $pwd);
    $stmt->execute();
    $pdo = null;
    $stmt = null;
}
