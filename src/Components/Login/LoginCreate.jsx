import React, { useContext } from "react";
import { USER_POST } from "../../api";
import { UserContext } from "../../Context/UserContext";
import { useForm } from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { Error } from "../Helper/Error";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
