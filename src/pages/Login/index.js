/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import logo from '../../assets/images/logodark.png';

import './styles.css';

export default class Login extends Component {
  state = {
    cpf: '',
    password: '',
  };

  componentDidMount() {
    const { cpf } = this.props.location.state || '';
    this.setState({ cpf });
  }

  handleInputCPF = (e) => {
    this.setState({ cpf: e.target.value });
  };

  handleInputPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/adesao');
  };

  render() {
    const { cpf, password } = this.state;
    return (
      <div id="login">
        <img src={logo} alt="AppPrev" />
        <form>
          <fieldset>
            <h5>CPF</h5>
            <input
              onChange={this.handleInputCPF}
              value={cpf}
              type="text"
              placeholder="Digite o seu CPF"
              id="cpf_input"
            />
          </fieldset>
          <fieldset>
            <h5>Senha</h5>
            <input
              onChange={this.handleInputPassword}
              value={password}
              type="password"
              placeholder="Digite a sua senha"
              id="password_input"
            />
          </fieldset>
          <button onClick={this.handleSubmit} type="submit">
            Entrar
          </button>
          <p>
            Esqueceu sua senha? <a href="/signup">Recuperar sua senha</a>
          </p>
          <p>
            <a href="/signup">Primeiro acesso</a>
          </p>
        </form>
      </div>
    );
  }
}
