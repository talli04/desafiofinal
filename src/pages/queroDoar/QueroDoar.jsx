import livroform from '../../assets/livroform.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from "axios"

export default function QueroDoar(){
    
    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async()=>{

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post("https://api-n76r.onrender.com/doar",dadosAEnviar)
            alert("Obrigado, seu livro foi cadastrado com sucesso!")
    }

    return(
        <section className={s.form}>
            <p>Por favavor, preencha o formulário com suas informações e as informações do livro.</p>
            <form onSubmit={(e)=> e.preventDefault()}>
               <div>
                <img src={livroform} alt="imagem de ícone de livro aberto azul." />
                <h2>Informações do Livro</h2>
                </div> 
                <input type="text" name="" id="" placeholder='Titulo' onChange={capturaTitulo} required/>
                <input type="text" name="" id="" placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text" name="" id="" placeholder='Autor'onChange={capturaAutor} required/>
                <input type="url" name="" id="" placeholder='Link da imagem'onChange={capturaImagem} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>
            </form>
        </section>
    )
}