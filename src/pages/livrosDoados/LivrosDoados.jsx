
import livro from '../../assets/livro.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados(){
    return(
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
        <nav>
            <a href=""><img src={livro} alt="" /></a>
            <p>O protagonista</p>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
        </nav>
      </section>
    )
}