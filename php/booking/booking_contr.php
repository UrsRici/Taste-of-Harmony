<?php

declare(strict_types=1);

function is_input_empty(string $phon, string $date, string $time)
{
    if (empty($phon) || empty($date) || empty($time)) {
        return true;
    } else {
        return false;
    }
}

function is_phon_invalid(string $phon)
{
    $pattern = '/^[0-9]{10}$/';
    if(!preg_match($pattern, $phon)){
        return true;
    } else {
        return false;
    }
}

function is_table_available(object $pdo, array $data)
{
    if (get_reservations($pdo, $data['date'], $data['time'])){
        $max_capacity = max_capacity($pdo);
        $reservations = get_reservations($pdo, $data['date'], $data['time']);
        foreach ($reservations as $reservation) {
            $max_capacity = $max_capacity - $reservation['persons'];
        }
        
        if ($max_capacity >= $data['pers']) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}