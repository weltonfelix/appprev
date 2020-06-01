import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.css';

import Person from '../../assets/images/person.jpg';

function Adesao() {
  return (
    <>
      <Sidebar />
      <div id="dashboard">
        <h1>Meu Perfil</h1>
        <div id="form-results">
          <form>
            <select>
              <option selected>
                Você pretende formar ou já possui uma reserva para utilizar em
                caso de emergência? Reserva sugerida: de 3 a 6 salários líquidos
              </option>
              <option>Sim</option>
              <option>Não</option>
              <option>Não sei dizer</option>
            </select>
            <select>
              <option selected>Qual sua faixa salarial?</option>
              <option>Até R$6 mil</option>
              <option>De R$6 mil a R$10 mil</option>
              <option>Acima de R$10 mil</option>
            </select>
          </form>
          <a href="/results">
            <button type="button">ENVIAR</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Adesao;
