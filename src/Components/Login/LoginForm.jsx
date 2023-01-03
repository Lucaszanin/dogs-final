import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import URL from "../Url";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
