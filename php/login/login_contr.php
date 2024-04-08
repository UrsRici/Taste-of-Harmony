<?php

declare(strict_types=1);

function is_input_empty(string $username, string $pwd)
{
    if (empty($username) || empty($pwd)) {
        return true;
    } else {
        return false;
    }
}

function is_username_correct(object $pdo, string $username)
{
    if (!get_username($pdo, $username)) {
        return true;
    } else {
        return false;
    }
}

function is_password_correct(object $pdo, string $username, string $pwd)
{
    if (!get_username($pdo, $username)) { return true; }

    $userData = get_userData($pdo, $username);
    
    if (!password_verify($pwd, $userData["password"])) {
        return true;
    } else {
        return false;
    }
}