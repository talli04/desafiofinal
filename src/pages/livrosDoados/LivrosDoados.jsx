
import livro from '../../assets/livro.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados(){
    return(
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
        <nav>
            <a href=""><img src={livro} alt="" /></a>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
        </nav>
      </section>
    )
}