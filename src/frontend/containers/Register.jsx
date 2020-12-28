import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form);
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              onChange={handleInput}
              placeholder="Nombre"
            />
            <input
              name="email"
              className="input"
              type="text"
              onChange={handleInput}
              placeholder="Correo"
            />
            <input
              name="password"
              className="input"
              type="password"
              onChange={handleInput}
              placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
