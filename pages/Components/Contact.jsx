
import style from '../../styles/Contact.module.css'
import { motion } from 'framer-motion'


export default function Contact() {
  return (
    <div className={style.contact} id='Contact'>
      <div className={style.wrapper}>
      <div className={style.left}>
          <motion.img 
          initial={{x:'0'}}
          whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
          src="chennai.png" alt="" />
          <span>I live in </span>
          <span>Chennai,India</span>
      </div>
      <div 
        className={style.blur}
        
        ></div>
      </div>

      <div className={style.wrapper}>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 2s linear forwards '}} className={style.right}>
        <span>Lets Talk !</span>
        <span>Gmail - althafsubair04@gmail.com</span>
        <span>Github - github.com/capslock-inc</span>
        <span>Blog - medium.com/@Althaf.A</span>
        <a href='mailto: althafsubair04@gmail.com'><button className={style.but}>Send mail</button></a>
      </motion.div>
      </div>


    </div>
  )
}
