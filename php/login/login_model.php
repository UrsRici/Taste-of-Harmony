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

function get_userData(object $pdo, string $username)
{
    $query = "SELECT * FROM user WHERE name = :username;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}