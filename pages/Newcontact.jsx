import React from 'react'
import style from '../styles/Newcontact.module.css'

function Newcontact() {
  return (
    <div className={style.newcontact}>
        <section class={style.contact} id="Contact">
                <div class={style.uppercontact}>
                    <div class={style.contactdata}>
                        <h2 >CONTACT</h2>
                        <span> Questions not answered yet ? I can help . </span>
                        <span >Let's talk</span>
                    </div>

                    <div class="contactbutton">
                    <a href='mailto: althafsubair04@gmail.com'><button>Send mail</button></a>
                    </div>
                </div>
            </section>
    <footer class={style.footer}>
    <div class={style.footersection}>
        <div class={style.services}>
            <h3>Services</h3>
            <ul>
                <li>Full-stack application.</li>
                <li>Moblie application.</li>
                <li>DevOps solutions.</li>
                <li>Microservice solutions.</li>
            </ul>
        </div>

        <div class={style.qualification}>
            <h3>Qualification</h3>
            <ul>
                <li>Bacholar degree in computer science and engineering (B.E CSE). </li>
                <li>Self-thought full-stack developer and DevOps engineer. </li>
                
            </ul>
        </div>
        <div class={style.links}>
            <h3 class="linktitle">Link</h3>
            <ul>
                <li><a href='https:www.github.com/capslock-inc'>Github- github.com/capslock-inc</a></li>
                <li><a href='https:www.medium.com/@Althaf.A'>Blog- medium.com/@Althaf.A</a></li>
                <li><a href='mailto: althafsubair04@gmail.com'> Gmail- althafsubair04@gmail.com</a></li>
            </ul>
        </div>

    </div>
    <span>&#169; 2022 Created by Althaf A. All right reserved </span>
</footer>
</div> 
  )
}

export default Newcontact