import style from '../../styles/Skillsalter.module.css'
import { motion } from 'framer-motion'
import { themecontext } from '../Context'
import { useContext } from 'react'

export default function Skills() {

  const theme = useContext(themecontext);
  const dark = theme.state.dark;

  return (
    <div className={style.skills}>

      

      <div className={style.lower}>
        {/* <div className={style.fl}> */}
          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.lleft}>
            <span>Hey,</span>
            <span>I&#39;m Althaf A</span> 
            <div className={style.uright}>
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
             <span>
            I&#39;m a Software engineer, who is passionate about building amazing stuffs.
            Hire me as Fullstack developer, software developer, Devops engineer or Mentor.
            </span>
            
          <a href='mailto: althafsubair04@gmail.com'><button className={style.ibutton}>Hire me</button></a>
          </motion.div>
          {/* </div> */}

          <div className={style.lright}>
            <div className={style.imagecon}> 
            <motion.img
            className={style.image}
            initial={{x:'0'}}
            whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            src={'intro.png'}  alt="" /></div> 
          </div>
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
  )
}
