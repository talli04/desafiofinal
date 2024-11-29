
import livro from '../../assets/livro.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados(){
    return(
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
        <section>
            <section>
            <img src={livro} alt="imagem do livro o protagonista" />
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
            </section>
        </section>
      </section>
    )
}