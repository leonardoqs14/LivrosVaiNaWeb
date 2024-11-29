import logoFacebook from '../../assets/logoFacebook.png'
import logoTwiter from '../../assets/logoTwiter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Icone do facebook" /></a>
                    <a href=""><img src={logoTwiter} alt="Icone Twiter" /></a>
                    <a href=""><img src={logoYoutube}alt="Icone Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Icone Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="Icone Instagram" /></a>
                </nav>
            </section>
            <section className={s.direitosAutorais}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>

            </section>
        </footer>
    )
}