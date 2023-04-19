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

            $content = file_get_contents("php://input");
            $data = json_decode($content, true);

            //Escape double quotes
            $code = str_replace('"', '\\"', $data['codeToConvert']);
            /*
            //Delete new lines
            $code = str_replace("\n", "", $code);

            //Remove extra spaces
            $code = trim(preg_replace('/\s+/', ' ', $code));

            //Convert to array
            $code = str_split($code, 200);
            */
            $code = explode("\n", $code);

            foreach ($code as $print) {
                echo 'client.println("' . htmlspecialchars($print) . '");<br>';
            }

            break;
    }
} else {
    header('Location: index.php?route=home');
    exit;
}
