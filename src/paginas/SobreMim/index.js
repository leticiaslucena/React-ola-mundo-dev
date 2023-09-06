import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.gif";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, sou LETÍCIA!
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto leticia sorrindo"
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Aluna de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Em 2014 fiz o ensino superior, escolhi cursar Gestão de recursos Humanos na Universidade Paulista (UNIP). Mas foi no final em 2022 que me interecei na programação, e já escolhi em que área trabalhar, como desenvolvedora Front-end

            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou quando fui me aprofundar mais sobre linguagem de programação, em um curso para tec Recruit, onde estudei lógica de programação, e já fui me inscrevendo em bootcamps e cursos rapidos de HTML, CSS.
            </p>
            <p className={styles.paragrafo}>
                Com isso tenho minhas experiências de dev mais próxima da realidade, com  criação de site, e aprendo muito enquanto codifico.
            </p>
            <p className={styles.paragrafo}>
                E estou descidida que no inicio de 2024 já me inscrever em uma faculdade para analises de sistemas, e  procurar um estágio na área que desejo atuar. como desenvolvedora Front-End.
            </p>

        </PostModelo>
    )
}