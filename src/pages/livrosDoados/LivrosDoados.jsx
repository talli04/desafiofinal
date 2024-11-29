
import livro from '../../assets/livro.png'
import s from './livrosDoados.module.scss'
export default function LivrosDoados(){
    return(
        <section classname={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
        <section classname={s.containerCards}>
            <section>
            <img src={livro} alt="imagem do livro o protagonista" />
          <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
            </section>
        </section>
      </section>
    )
}