<?php

$conn = mysqli_connect('localhost', 'root', '', 'restaurant');

if (!$conn) {
    die("Conexiunea la baza de date a eșuat: " . mysqli_connect_error());
}
echo "Conexiunea la baza de date a fost realizată cu succes!";
