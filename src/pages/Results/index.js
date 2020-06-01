import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.css';

import Regressiva from '../../assets/images/regressiva.png';

function Adesao() {
  return (
    <>
      <Sidebar />
      <div id="dashboard">
        <h1>Meu Perfil</h1>
        <div id="results">
          <img src={Regressiva} alt="Regressiva" />
          <p>
            Faça a opção por Regime Progressivo, você ainda é jovem, mas ainda
            assim precisa pensar na sua aposentadoria, seu padrão de gastos é
            coeso com os seus ganhos, visto que trabalha em uma função de risco
            é necessário que tenha algum capital com alta liquidez, ou seja que
            você consiga retirar a qualquer momento. Você está fazendo um bom
            trabalho com suas finanças pessoais, estamos orgulhosos!!!
          </p>
        </div>
      </div>
    </>
  );
}

export default Adesao;
