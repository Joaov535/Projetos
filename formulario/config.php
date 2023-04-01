<?php

include_once('conexao.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$sexo = $_POST['genero'];
$nascimento = $_POST['ano_nascimento'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$endereco = $_POST['endereco'];


$query_cadastro = "INSERT INTO cadastro(nome, email, telefone, sexo, nascimento, cidade, estado, endereco) VALUES('$nome','$email','$telefone','$sexo','$nascimento','$cidade','$estado','$endereco')";

if (mysqli_query($db_conect, $query_cadastro)) {
  if (mysqli_affected_rows($db_conect) > 0) {
    header('Location: sucesso.php');
  } else {
    echo 'ERRO! '.mysqli_error($db_conect);

    function redirecionar($url) {
      // aguarda 5 segundos
      sleep(5);
      
      // redireciona para a nova página
      header("Location: $url");
      exit();
    }
    // chama a função com a URL da nova página
    redirecionar("index.php");
  }
}

// Fechando a conexão com o banco de dados
mysqli_close($conn);
