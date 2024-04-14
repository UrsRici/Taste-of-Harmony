<?php

declare(strict_types=1);

function is_input_empty(string $email, string $pwd)
{
    if (empty($email) || empty($pwd)) {
        return true;
    } else {
        return false;
    }
}

function is_email_correct(object $pdo, string $email)
{
    if (!get_email($pdo, $email)) {
        return true;
    } else {
        return false;
    }
}

function is_password_correct(object $pdo, string $email, string $pwd)
{
    if (!get_email($pdo, $email)) { return true; }

    $userData = get_userData($pdo, $email);
    
    if (!password_verify($pwd, $userData["password"])) {
        return true;
    } else {
        return false;
    }
}