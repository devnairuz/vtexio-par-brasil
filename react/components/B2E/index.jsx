import React from 'react'
import "./b2e.css";

const B2E = ({LoginB2E}) => {
  return (
    <>
      <div className="b2e-docol bg-funcionario">
        <div className="main-b2e vtex-store-components-3-x-container">
          <div className="title-b2e">
            <h1>Acesso exclusivo para<br></br><span>colaboradores docol</span></h1>
          </div>
          <div className="login-b2e">
            <LoginB2E />
          </div>
        </div>
      </div>
      <div className="rodape-b2e">
        <div className="vtex-store-components-3-x-container">
          <div className="wrapper-rodape">
            <div className="infos-texto">
              <p>Docol® | Todos os direitos reservados. Razão Social: Docol Indústria e Comércio Ltda. CNPJ: 75.339.051/0001-41. Avenida Edmundo Doubrawa, 1001, Bairro: Zona Industrial Norte, CEP: 89219-502, Joinville-SC.<br></br>Atualizamos a Política de Privacidade do site e ao continuar navegando neste site, entendemos que você está ciente e de acordo com ela. Preços e condições de pagamento exclusivos para compras via internet. Caso os produtos apresentem divergência de valores, o preço válido é o do Carrinho de Compras. Vendas sujeitas a análise e confirmação de dados. Colocar produtos no Carrinho de Compras não garante a reserva dos mesmos.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default B2E