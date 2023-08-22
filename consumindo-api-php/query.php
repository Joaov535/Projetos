<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=test", 'root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo 'ERROR: ' . $e->getMessage();
}

if (!empty($_GET['action'])) {
    $action = $_GET['action'];
    switch ($action) {
        case 'get-content':
            getContent($pdo);
            break;
    }
}

function getContent($pdo)
{

    $sql = "SELECT * FROM usuarios;";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}
