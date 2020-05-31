import React, { Component } from 'react';
import { MdArrowForward } from 'react-icons/md';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import image1 from '../../assets/images/infoimage1.png';
import image2 from '../../assets/images/infoimage2.png';
import image3 from '../../assets/images/infoimage3.png';
import scan from '../../assets/images/scan.png';

export default class Home extends Component {
  state = {
    cpf: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { cpf } = this.state;
    const { history } = this.props;
    history.push('/login', { cpf });
  };

  handleInput = (e) => {
    const newCpf = e.target.value;
    this.setState({ cpf: newCpf });
  };

  render() {
    const { cpf } = this.state;
    return (
      <>
        <div id="bfundo">
          <Header />
          <div id="content">
            <h1>
              Conheça as melhores escolhas que você pode fazer para a sua
              previdência
            </h1>
            <div id="form">
              <h3>Agora ficou mais fácil prever o seu plano de previdência</h3>
              <form>
                <input
                  type="text"
                  onChange={this.handleInput}
                  value={cpf}
                  placeholder="Digite seu CPF"
                />
                <button onClick={this.handleSubmit} type="submit">
                  <MdArrowForward size={30} color="#ffffff" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="main">
          <h4>Tenha o controle da sua previdência privada</h4>
          <div id="details">
            <div className="info">
              <img src={image2} alt="Imagem2" className="info_img" />
              <h5 className="info_title">Ainda não tenho plano</h5>
              <p className="info_text">
                Contrate um benefício pensado para você!
              </p>
            </div>
            <div className="info">
              <img src={image1} alt="Imagem1" className="info_img" />
              <h5 className="info_title">Já tenho plano</h5>
              <p className="info_text">
                Controle tudo que acontece na sua previdência!
              </p>
            </div>
            <div className="info">
              <img src={image3} alt="Imagem3" className="info_img" />
              <h5 className="info_title">Já recebo o benefício</h5>
              <p className="info_text">
                Realize alterações e faça sua prova de vida
              </p>
            </div>
          </div>
        </div>
        <div id="gradient">
          <div id="info">
            <h3>Faça sua prova de vida no conforto da sua casa!</h3>
            <p>
              Faça a sua prova de vida por vídeo! MANTENHA-SE EM DIA COM SUA
              PREVIDÊNCIA, NO CONFORTO DA SUA CASA!
            </p>
          </div>
          <img src={scan} alt="Prova de Vida" />
        </div>
        <Footer />
      </>
    );
  }
}
