import React from 'react'
import style from '../../styles/Contact.module.css'

function Contact() {
  return (
    <div className={style.newcontact}>
        <section className={style.contact} id="Contact">
                <div className={style.uppercontact}>
                    <div className={style.contactdata}>
                        <h2 >CONTACT</h2>
                        <span> Questions not answered yet ? I can help . </span>
                        <span >Let&#39;s talk</span>
                    </div>

                    <div>
                    <a href='mailto: althafsubair04@gmail.com'><button>Send mail</button></a>
                    </div>
                </div>
            </section>
    <footer className={style.footer}>
    <div className={style.footersection}>
        <div className={style.services}>
            <h3>Services</h3>
            <ul>
                <li>Full-stack application.</li>
                <li>Moblie application.</li>
                <li>DevOps solutions.</li>
                <li>Microservice solutions.</li>
            </ul>
        </div>

        <div className={style.qualification}>
            <h3>Qualification</h3>
            <ul>
                <li>Bachelor degree in computer science and engineering (B.E CSE). </li>
                <li>Self-taught full-stack developer and DevOps engineer. </li>
                
            </ul>
        </div>
        <div className={style.links}>
            <h3>Link</h3>
            <ul>
                <li><a href='https://www.github.com/capslock-inc'>Github- github.com/capslock-inc</a></li>
                <li><a href='https://www.medium.com/@Althaf.A'>Blog- medium.com/@Althaf.A</a></li>
                <li><a href='mailto: althafsubair04@gmail.com'> Gmail- althafsubair04@gmail.com</a></li>
            </ul>
        </div>

    </div>
    <span>&#169; 2022 Created by Althaf A. All right reserved </span>
</footer>
</div> 
  )
}

export default Contact