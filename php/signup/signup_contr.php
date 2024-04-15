<?php

declare(strict_types=1);

function is_input_empty(string $username, string $pwd, string $email)
{
    if (empty($username) || empty($pwd) || empty($email)) {
        return true;
    } else {
        return false;
    }
}

function is_email_invalid(string $email)
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function is_username_taken(object $pdo, string $username)
{
    if (get_username($pdo, $username)) {
        return true;
    } else {
        return false;
    }
}

function is_email_taken(object $pdo, string $email)
{
    if (get_email($pdo, $email)) {
        return true;
    } else {
        return false;
    }
}
function is_password_strong(string $pwd)
{
    if (preg_match('/[A-Z]+/', $pwd) && preg_match('/[a-z]+/', $pwd) && preg_match('/[0-9]+/', $pwd)){
        return true;
    } else {
        return false;
    }
}