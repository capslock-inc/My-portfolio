import style from '../../styles/Skills.module.css'
import { motion } from 'framer-motion'
import { themecontext } from '../Context'
import { useContext } from 'react'

export default function Skills() {

  const theme = useContext(themecontext);
  const dark = theme.state.dark;

  return (
    <div className={style.skills}>

      <div className={style.upper}>
        <div className={style.wrapper}>
          <div className={style.uleft}>
            <motion.img
            initial={{x:'0'}}
            whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            src={`${dark ? 'darkskils.png':'skills.png'}`} alt="" />
          </div>

          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.uright}>
            <span>Programming<br/>Language</span>
            <span>These are some programming language I<br/> personally love to work with, Because of <br/>its great community support and<br/>awesome things we can build with them.</span>
          </motion.div>
        </div>
      </div>

      <div className={style.lower}>
        <div className={style.fl}>
          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.lleft}>
            <span>Frameworks & Tools</span>
            <span>These are some of my favorite framework and tools which greatly helps me with amazing productivity and high quality of work.</span>
          </motion.div></div>

          <div className={style.lright}>
            <motion.img
            initial={{x:'0'}}
            whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            src={`${dark ? 'darkframe.png':'framework.png'}`}  alt="" />
          </div>
      </div>
      
    </div>
  )
}
