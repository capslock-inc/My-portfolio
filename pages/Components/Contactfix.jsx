import style from '../../styles/Contactfix.module.css'
import { motion } from 'framer-motion'
import { themecontext } from '../Context'
import { useContext } from 'react'

export default function Contactfix() {

  const theme = useContext(themecontext);
  const dark = theme.state.dark;

  return (
    <div className={style.skills}>
      <div className={style.header}>
       <span>CONTACT</span>
      </div> 

      <div className={style.upper}>
        <div className={style.wrapper}>
        <div className={style.imagewrap}>
          <div className={style.uleft}>
            <motion.img
            // initial={{x:'0'}}
            // whileInView={{animation:'left-to-right 4s linear infinite alternate'}}
            src={'chennai.png'} alt="" />
            
          </div>
          <span>I live in</span> 
          <span>Chennai, India</span></div>

          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.uright}>
            <span>Lets Talk !</span>
        <span>Gmail - althafsubair04@gmail.com</span>
        <span>Github - github.com/capslock-inc</span>
        <span>Blog - medium.com/@Althaf.A</span>
        <a href='mailto: althafsubair04@gmail.com'><button className={style.but}>Send mail</button></a>
          </motion.div>
        </div>
      </div> 
    </div>
  )
}