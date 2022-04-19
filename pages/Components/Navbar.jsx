import style from '../../styles/Navbar.module.css'
import { Link } from 'react-scroll/modules'
import { themecontext } from '../Context'
import { useContext } from 'react'



function Navbar() {
  const theme = useContext(themecontext);
  const dark = theme.state.dark;

  const handler =  ()=> {
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className='' id='Intro'>
    <div className={style.navbar}>

        <div className={style.nleft}>
          <span>Althaf A</span>
        </div>

        <div className={style.nright}>

            <div className={style.nlist}>
                <ul>
                  <li><Link spy={true} to='Intro'
                  smooth = {true}>
                    Home</Link></li>
                    <li onClick={handler}>Theme</li>
                  <li><Link spy={true} to='Contact' 
                  smooth = {true}>
                    Contact</Link></li>
                  <li className={style.res}><a className={style.dow} href='resume-althaf.pdf'download>DownloadCV</a></li> 
                </ul>
            </div>
        
            <div className={style.but}>
                <a className={style.dow} href='resume-althaf.pdf'download>
                    <button className={style.nbut} >Download CV</button>
                </a>
            </div>

        </div>
    </div>
    </div>
  )
}


export default Navbar