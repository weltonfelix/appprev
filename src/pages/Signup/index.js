/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import logo from '../../assets/images/logodark.png';

import './styles.css';

export default class Signup extends Component {
  state = {
    cpf: '',
    password: '',
    confirmPassword: '',
    mail: '',
    phone: '',
    birthday: '',
  };

  componentDidMount() {
    const { cpf } = this.props.location.state || '';
    this.setState({ cpf });
  }

  handleInputCPF = (e) => {
    this.setState({ cpf: e.target.value });
  };

  handleInputPhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleInputMail = (e) => {
    this.setState({ mail: e.target.value });
  };

  handleInputConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

  handleInputBirthday = (e) => {
    this.setState({ birthday: e.target.value });
  };

  handleInputPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    alert('Verifique o seu e-mail e siga as instruções');
    this.props.history.push('/login');
  };

  render() {
    const {
      cpf,
      password,
      mail,
      confirmPassword,
      birthday,
      phone,
    } = this.state;
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
            <h5>Celular</h5>
            <input
              onChange={this.handleInputPhone}
              value={phone}
              type="phone"
              placeholder="Digite o seu número"
              id="phone_input"
            />
          </fieldset>
          <fieldset>
            <h5>E-mail</h5>
            <input
              onChange={this.handleInputMail}
              value={mail}
              type="email"
              placeholder="Digite o seu E-mail"
              id="mail_input"
            />
          </fieldset>
          <fieldset>
            <h5>Data de Nascimento</h5>
            <input
              onChange={this.handleInputBirthday}
              value={birthday}
              type="date"
              placeholder="dd/mm/aaaa"
              id="bd_input"
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
          <fieldset>
            <h5>Confirmar Senha</h5>
            <input
              onChange={this.handleInputConfirmPassword}
              value={confirmPassword}
              type="password"
              placeholder="Confirme a sua senha"
              id="cp_input"
            />
          </fieldset>
          <button onClick={this.handleSubmit} type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
