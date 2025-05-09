import logoLivro from "../../assets/logoLivro.png"
import lupaHeader from "../../assets/lupaHeader.png"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import s from './header.module.scss'
export default function Header(){
    return(

        <BrowserRouter>
        
        <header>
            <section className={s.LogoHeader}>
                <img src={logoLivro} alt="Imagem de uma ilustração de um livro aberto com a capa azul" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to="/">Inicio</Link></li>
                    <li><Link className={s.link} to='/livrosDoados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/queroDoar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className= {s.barraDeBusca}>
                <input type="search" name="" id="" placeholder="O que você procura?" />
                <button><img src={lupaHeader} alt="Imagem de uma lupa branca" /></button>
            </section>
        </header>
        <Routes>
            <Route path="/"element={<Inicio/>}/>
            <Route path='/livrosDoados' element={<LivrosDoados/>}/>
            <Route path='/queroDoar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}