import iconeLivro from '../../assets/iconeLivroForm.png'
import { useState} from 'react'
import axios from 'axios'
import s from './queroDoar.module.scss'

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)

    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }
    const capturaImage = (e) =>{
        setImage_url(e.target.value)
    }

    const enviarDados = async() =>{

        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-t1.onrender.com/doar",dadosPEnviar)

    }

    return(
        
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text"  placeholder='Titulo' onChange={capturaTitulo} required/>
                <input type="text"  placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text"  placeholder='Autor' onChange={capturaAutor}/>
                <input type="text"  placeholder='Link da Imagem' onChange={capturaImage} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>
            </form>
        </section>
    )
}