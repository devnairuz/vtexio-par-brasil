import React, { useEffect, useState } from 'react'
import styles from "./b2e.css";
import "./b2e.css";
import LogoNairuz from "./images/nairuz.png";
import LogoVTex from "./images/vtex.svg";
import { useRuntime } from "vtex.render-runtime";
import axios from "axios";

const B2E = ({ LoginB2E }) => {
  const [user, setUser] = useState(null);
  const { navigate } = useRuntime();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkAccess();
  }

  async function checkAccess() {
    try {
      if (!user) {
        const session = await axios.get('/api/sessions?items=*');
        let usuarioSalvo = session.data.namespaces?.profile?.email?.value;
        
        if(!usuarioSalvo){
          navigate({to: '/login-par-brasil'});
          return;
        }

        setUser(usuarioSalvo);
      }

      // Valida com seu backend
      const response = await axios.post('/_v/private/checkAccess', { identifier: user });

      const { allowed } = response.data

      if (!allowed) {
        // navigate({to: '/nao-autorizado'});
        console.log("Não permitido!");
      }
    } catch (err) {
      console.error('Erro na verificação de acesso:', err);
      // navigate({to: '/login-par-brasil'});
    }
  }

  useEffect(() => {
    const init = async () => {
      await checkAccess();
    };
    init();
  }, []);

  return (
    <>
      <div className={`b2e-par-brasil ${styles.bgFuncionario}`}>
        <div className="main-b2e vtex-store-components-3-x-container">
          <div className={styles.titleB2e}>
            <h1>PAR - Onde comprar é um benefício!</h1>
            <p>Se a sua empresa ou associação faz parte<br/>do PAR, insira seu CPF e seja bem vindo!</p>
          </div>
          <div className={styles.loginB2e}>
            <h3>Faça seu login</h3>
            <form onSubmit={handleSubmit} className={styles.formLogin}>
              <input onChange={e => setUser(e.target.value)} name="text" placeholder="Insira seu CPF ou E-mail" type="text" />
              <button type="submit">Entrar</button>
            </form>
            <LoginB2E />
          </div>
        </div>
      </div>
      <div className={styles.rodapeB2e}>
        <div className="vtex-store-components-3-x-container">
            <div className={styles.infosTexto}>
                <p>Par® | Todos os direitos reservados.</p>
                <div className={styles.logosRodape}>
                    <div className={styles.logo}>
                        <p>Desenvolvimento</p>
                        <a href="https://www.nairuz.com.br/" rel="noopener" target='_blank'>
                            <img loading="lazy" src={LogoNairuz} width={75} height={15} alt="nairuz" />
                        </a>
                    </div>
                    <div className={styles.logo}>
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