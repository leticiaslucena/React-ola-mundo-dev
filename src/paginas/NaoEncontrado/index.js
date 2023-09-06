import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NaoEncontrado.module.css';
import Erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrado() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>Ops! Pagina não encontrada.</h1>
                <p className={styles.paragrafo}>
                    “Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.titulo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial”.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar("/")}
                >

                    <BotaoPrincipal tamanho="grande" >
                        Voltar!
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={Erro404}
                    alt='foto de cachorro com óculos e vestido como humano'

                />
            </div>
            <div className={styles.espacoEmBranco}>   </div>
        </>


    )
}