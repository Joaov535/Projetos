<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <title>Formulario</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="box">
    <form action="config.php" method="post">
      <fieldset>
        <legend><strong>Fomulário de Cadastro</strong></legend>
        <br>

        <div class="inputBox">
          <input type="text" name="nome" id="nome" class="inputUser" required>
          <label for="nome" class="labelInput">Nome</label>
        </div>
        <br><br>

        <div class="inputBox">
          <input type="text" name="email" id="email" class="inputUser" required>
          <label for="email" class="labelInput">E-mail</label>
        </div>
        <br><br>

        <div class="inputBox">
          <input type="tel" name="telefone" id="telefone" class="inputUser" required>
          <label for="telefone" class="labelInput">Telefone</label>
        </div>
        <br>

        <p>Sexo:</p>
        <input type="radio" name="genero" id="feminino" value="feminino">
        <label for="feminino">Feminino</label>
        <br>

        <input type="radio" name="genero" id="masculino" value="masculino">
        <label for="masculino">Masculino</label>
        <br>

        <input type="radio" name="genero" id="outro" value="outro">
        <label for="outro">Outro</label>
        <br> <br>

        <label for="nome"><strong>Data de Nascimento:</strong></label>
        <input type="date" name="ano_nascimento" id="ano_nascimento" required>
        <br><br>

        <div class="inputBox">
          <input type="text" name="cidade" id="cidade" class="inputUser" required>
          <label for="cidade" class="labelInput">Cidade</label>
        </div>
        <br><br>

        <div class="inputBox">
          <input type="text" name="estado" id="estado" class="inputUser" required maxlength="2">
          <label for="estado" class="labelInput">UF</label>
        </div>
        <br><br>

        <div class="inputBox">
          <input type="text" name="endereco" id="endereco" class="inputUser" required>
          <label for="endereco" class="labelInput">Endereço</label>
        </div>

        <div class="btnSubmit">
          <input type="submit" value="Cadastrar" class="submit">
        </div>

      </fieldset>
    </form>
  </div>

</body>

</html>