import facebook from '../../assets/facebook.png'
import twitter from '../../assets/Twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
        <section className={s.contatosFooter}>
            <p>4002-8922</p>
            <nav>
                <a href=""><img src={facebook} alt="loga do facebook" /></a>
                <a href=""><img src={twitter} alt="logo do twitter" /></a>
                <a href=""><img src={youtube} alt="logo do youtube" /></a>
                <a href=""><img src={linkedin} alt="logo do linkedin" /></a>
                <a href=""><img src={instagram} alt="logo do instagram" /></a>
            </nav>
        </section>
        <section className={s.copyright}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
        </footer>
    )
}