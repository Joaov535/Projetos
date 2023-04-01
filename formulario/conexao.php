<?php 

$dbserver = 'localhost';
$dbuser = 'root';
$dbpassword = '';
$dbname = 'formulario';


// Criando conexão
$db_conect = new mysqli($dbserver,$dbuser,$dbpassword,$dbname);

// if($db_conect->connect_errno){
//   echo 'deu ruim';
// } else {
//   echo 'tudo certo';
// }

?>