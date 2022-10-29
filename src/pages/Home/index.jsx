import React from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Image, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

import { faContactBook } from "@fortawesome/free-regular-svg-icons";

const buttons = [
  {
    type: 'success',
    icon: faWhatsapp,
    text: 'WhatsApp',
    url: '',
    customStyle: ''
  },
  {
    type: 'primary',
    icon: faFacebook,
    text: 'Facebook',
    url: '',
    customStyle: ''
  },
  {
    type: 'primary',
    icon: faInstagram,
    text: 'Instagram',
    url: '',
    customStyle: ''
  },
  {
    type: 'primary',
    icon: faCcPaypal,
    text: 'Nosso pix',
    url: '',
    customStyle: ''
  },
  {
    type: 'primary',
    icon: faContactBook,
    text: 'Adicionar aos contatos',
    url: '',
    customStyle: ''
  }
]

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          width="150"
          src="https://www.devluar.com/static/media/logo.e9956f9a.png"
          alt="logo"
          style={{marginBottom: 30}}
        />
        <h1>Raul Rodrigues - RR</h1>
        <div className="d-grid gap-2">
        {buttons.map(i => {
          return (
            <Button style={i.customStyle !== '' ? i.customStyle : {width: 300}} variant={i.type} size="lg">
               <FontAwesomeIcon icon={i.icon} />{i.text !== '' ? ' ' + i.text : ''}
            </Button>
          )
        })}

        </div>
        
      </header>
      <footer>
      <p>By Gênios - Publicidade e Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
};

export default Home;
