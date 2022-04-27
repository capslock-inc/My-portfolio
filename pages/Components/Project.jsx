import { motion } from 'framer-motion'
import style from '../../styles/Project.module.css'
import { themecontext } from '../Context'
import { useContext } from 'react'



export default function Project() {
  const theme = useContext(themecontext);
  const dark = theme.state.dark;
  return (
    <div className={style.project}>
     <div className={style.header}>
       <span>PROJECTS</span>
      </div>

      <div className={style.upper}>
        <div className={style.wrapper}>
          <div className={style.uleft}>
            <motion.img
            // initial={{x:'0'}}
            // whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            src={`${dark ? 'darkgrpc.png':'grpc.png'}`} alt="" />
          </div>

          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.uright}>
            <span>Distributed Tracing</span>
            <span>On gRPC based microservices running on kubernetes environment here services are built with nodejs and golang. All the services are containerzied and orchestrated using kubernetes. Logging and tracing done by using Logstach - ElasticSearch - Kibana. </span>
          </motion.div>
        </div>
      </div>

      <div className={style.lower}>
        <div className={style.fl}>
          <motion.div
        initial={{opacity: 0}}
        whileInView={{animation: 'appear 1s linear forwards '}} className={style.lleft}>
            <span>Fullstack Ecommerce</span>
            <span>Developed a Fullstack ecommer website by using Nextjs as frontend and strapi as content management system and go-fiber as JWT authentication API where all the elements are containerized and orchestrated using kubernetes. </span>
          </motion.div></div>

          <div className={style.lright}>
            <motion.img
            // initial={{x:'0'}}
            // whileInView={{animation:'left-to-right 2s linear infinite alternate'}}
            src={`${dark ? 'darkfullstack.png':'fullstackecom.png'}`}  alt="" />
          </div>
      </div>


    </div>
  )
}
