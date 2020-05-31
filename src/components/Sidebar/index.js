import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './styles.css';

import Person from '../../assets/images/person.jpg';

const Side = (props) => {
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>AppPrev</h3>
          </div>

          <ul className="list-unstyled components">
            <div id="user">
              <img src={Person} alt="user" width={48} />
              <div id="userinfo">
                <h4>Sierra Ferguson</h4>
                <p>s.ferguson@gmail.com</p>
              </div>
            </div>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Configurações</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="/">Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
