import React from 'react'
import "./b2e.css";
import LogoNairuz from "./images/nairuz.png";
import LogoVTex from "./images/vtex.svg";
import api from "../../services/api";

const B2E = ({ LoginB2E }) => {
    //Criar requisição http para o sistema externo

  return (
    <>
      <div className="b2e-par-brasil bg-funcionario">
        <div className="main-b2e vtex-store-components-3-x-container">
          <div className="title-b2e">
            <h1>PAR - Onde comprar é um benefício!</h1>
            <p>Se a sua empresa ou associação faz parte<br/>do PAR, insira seu CPF e seja bem vindo!</p>
          </div>
          <div className="login-b2e">
            <LoginB2E />
          </div>
        </div>
      </div>
      <div className="rodape-b2e">
        <div className="vtex-store-components-3-x-container">
            <div className="infos-texto">
                <p>Par® | Todos os direitos reservados.</p>
                <div className='logos-rodape'>
                    <div className='logo'>
                        <p>Desenvolvimento</p>
                        <a href="https://www.nairuz.com.br/" rel="noopener" target='_blank'>
                            <img loading="lazy" src={LogoNairuz} width={75} height={15} alt="nairuz" />
                        </a>
                    </div>
                    <div className='logo'>
                        <p>Plataforma</p>
                        <a href="https://vtex.com/pt-br/" rel="noopener" target='_blank'>
                            <img loading="lazy" src={LogoVTex} width={51} height={18} alt="vtex" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
  
export default B2E