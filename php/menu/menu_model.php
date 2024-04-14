<?php

declare(strict_types=1);

function get_categories(object $pdo)
{
    $query = "SELECT * FROM categories;";
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