<?php

session_start();


//SETUP SESSION
if (!isset($_SESSION['text']) && !isset($_POST['text'])) {
    $_POST['text'] = "Une balise d'ouverture sera surlignée en vert &lt;dnt&gt; et surlignera en bleu le texte jusqu'à la fermeture de celle-ci. &lt;/dnt&gt; Une mauvaise balise &lt;dtn&gt; sera surlignée en rouge.";
}

//ROUTER
if (array_key_exists('route', $_GET)) {

    switch ($_GET['route']) {

        case 'home':
            $template = 'home.phtml';
            require_once 'views/layout.phtml';
            break;

        case 'api':
            echo ('api');
            break;
    }
} else {
    header('Location: index.php?route=home');
    exit;
}
