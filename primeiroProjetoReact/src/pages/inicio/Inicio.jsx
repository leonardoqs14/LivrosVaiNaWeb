import s from './Inicio.module.scss'
import imagemDoacao from '../../assets/imagemDoacao.png'
import habitoLeitura from '../../assets/habitoLeitura.png'
import fornecimentoLivro from '../../assets/fornecimentoLivro.png'
import balanca from '../../assets/balanca.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
                <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section>
                        <img src={imagemDoacao} alt="Imagem ilustrando circulo social de 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={habitoLeitura} alt="imagem ilustrando uma pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={fornecimentoLivro} alt="Imagem pessoas Transformando o mundo" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={balanca} alt="Imagem ilustrando balança que representa igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>

        </main>
    )
}