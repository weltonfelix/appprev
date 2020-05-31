import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.css';

import ContribExtra from '../../assets/images/contribextra.png';
import ContribBas from '../../assets/images/contribbas.png';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div id="dashboard">
        <h1>Dashboard</h1>
        <div id="cards">
          <div className="card-hello">
            <h2>Olá, Sierra Ferguson</h2>
            <h2>Seja Bem Vinda!</h2>
          </div>
          <div className="card">
            <h1 className="value">R$ 10.987</h1>
            <h4 className="title">Contribuição Básica</h4>
            <p className="description">nos últimos 30 dias</p>
          </div>
          <div className="card">
            <h1 className="value">R$ 10.987</h1>
            <h4 className="title">Contribuição da Empresa</h4>
            <p className="description">nos últimos 30 dias</p>
          </div>
        </div>
        <div id="charts">
          <img src={ContribExtra} alt="Contribuição Extra" />
          <img src={ContribBas} alt="Contribuição Básica" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
