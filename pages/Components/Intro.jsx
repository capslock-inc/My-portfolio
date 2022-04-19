import style from '../../styles/Intro.module.css'
import { motion} from 'framer-motion'


export default function Intro() {
  
  return (
    <div>
    <div className={style.intro}>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}}
         className={style.left}>
            <span>Hey,</span>
            <span>I&#39;m Althaf A</span>
            <span>
            From Chennai, India.<br/>
            I&#39;m a Software engineer, who is passionate<br className={style.break}/> about building amazing stuffs.
            Hire me as<br className={style.break}/> Fullstack developer, software developer,<br className={style.break}/> Devops engineer or Mentor.
            </span>
             <a href='mailto: althafsubair04@gmail.com'><button className={style.ibutton}>Hire me</button></a>
        </motion.div>
          <div data-inviewport="left-to-right-inifinite" className={style.right}>
            <motion.img
            initial={{x:'0'}}
            whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            
             src='intro.png' alt="" />
        </div>
        {/* blurdiv */}
        <div 
        className='blur'
        style = {{
          background:'#EF1F83',
          top:'30%',
          left:'66%'
        }}
        ></div>
        {/* blurends */}
    </div>
    <div className={style.footer}>
      <ul>
        <motion.li
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}}
        ><a href='https:www.github.com/capslock-inc'> Github</a></motion.li>
        <motion.li
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards ',animationDelay:'300ms'}}
        ><a href='https:www.medium.com/@Althaf.A'>Blog</a></motion.li>
        <motion.li
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards ',animationDelay:'600ms'}}
        ><a href='mailto: althafsubair04@gmail.com'> Gmail</a></motion.li>
        
      </ul>
    </div>
    </div>
  )
}
