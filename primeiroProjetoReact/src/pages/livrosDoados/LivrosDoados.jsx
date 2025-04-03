import { useEffect } from 'react'
import livroProtagonista from '../../assets/livroOProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState} from 'react'
import axios from 'axios'
export default function LivrosDoados(){

const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await axios.get("https://vainaapi.onrender.com/livros")
        setLivros(resposta.data.livros)
    }
    useEffect(()=>{
        puxarLivros()
    },[])


    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className= {s.containerCards}>
                {livros.map((item) => (
                    <section>
                        <div>
                            <h3>{item.titulo}</h3>
                            <img src={item.image_url} alt={item.titulo} />
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}