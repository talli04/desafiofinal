import livroform from '../../assets/livroform.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.form}>
            <p>Por favavor, preencha o formulário com suas informações e as informações do livro.</p>
            <form action="">
               <div>
                <img src={livroform} alt="imagem de ícone de livro aberto azul." />
                <h2>Informações do Livro</h2>
                </div> 
                <input type="text" name="" id="" placeholder='Titulo' />
                <input type="text" name="" id="" placeholder='Categoria' />
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link da imagem' />
                <input type="submit" value="Doar" className={s.buttonDoar} />
            </form>
        </section>
    )
}