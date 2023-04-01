<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sucesso| Cadatro Efetuado</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-image: linear-gradient(to right, rgb(95, 0, 120),
          rgb(50, 0, 100));
    }

    .titulo {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: xx-large;
      font-family: Arial, Helvetica, sans-serif;
      color: antiquewhite;
    }

    .mensagem {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: large;
      font-family: Arial, Helvetica, sans-serif;
      color: antiquewhite;
      max-width: 700px;
      width: 100%
    }

    .btnRedir {
      text-align: center;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
      color: antiquewhite;
      max-width: 200px;
      height: 100px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  </style>
</head>

<body>
  <div class="titulo">
    <h1>Sucesso!</h1>
  </div>
  <div class="mensagem">
    <h2>Seu cadatro foi inserido na nossa base de dados...</h2>
  </div>
</body>
<script>
  window.onload = setTimeout(redireciona, 3500);
  function redireciona() {
    window.location.replace("index.php");
  }
</script>

</html>