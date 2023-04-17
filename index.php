<?php

session_start();


//ROUTER
if (array_key_exists('route', $_GET)) {

    switch ($_GET['route']) {

        case 'home':
            echo ('home');
            break;

        case 'api':
            echo ('api');
            break;
    }
} else {
    header('Location: index.php?route=home');
    exit;
}
