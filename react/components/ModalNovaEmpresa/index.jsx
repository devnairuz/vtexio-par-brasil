import style from "./modalnovaempresa.css";

const ModalNovaEmpresa = () => {
  return (
    <>
      <section className={style.modal}>
        <div className={style.conteudoModal}>
            <div className={style.textoTopo}>
                <p><strong>Seja uma empresa ou entidade conveniada</strong> do Par e leve aos seus funcionários ou associados os benefícios de comprar direto dos principais fabricantes do Brasil.
                Preencha o cadastro que entraremos em contato.</p>
            </div>

            <h2 className={style.tituloModal}>Faça o seu cadastro</h2>

            <form>
                <div className={style.fieldsForm}>
                    <input type="text" name="nome" id="nome" placeholder="Nome" required />
                    <input type="text" name="cnpj" id="cnpj" placeholder="Insira seu CNPJ" required />
                    <input type="text" name="nomedaempresa" id="nomedaempresa" placeholder="Nome da empresa" required />
                    <input type="text" name="localizacao" id="localizacao" placeholder="Localização" required />
                    <input type="email" name="email" id="email" placeholder="E-mail" required />
                    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
                </div>

                <button type="submit" className={style.btnCadastrar}>CADASTRAR</button>

                <div className={style.containerCheckbox}>
                    <input type="checkbox" name="privacidade-cookies" id="privacidade-cookies" required />
                    <label htmlFor="privacidade-cookies">Estou ciente e concordo com a Política de Privacidade e Cookies.*</label>
                </div>
                <div className={style.containerCheckbox}>
                    <input type="checkbox" name="receber-ofertas" id="receber-ofertas" required />
                    <label htmlFor="receber-ofertas">Autorizo o recebimento de ofertas e promoções exclusivas por meio do e-mail informado.*</label>
                </div>
            </form>
        </div>
      </section>
    </>
  )
}
  
export default ModalNovaEmpresa