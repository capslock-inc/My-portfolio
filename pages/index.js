import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import { themecontext } from './Context'
import { useContext } from 'react'

export default function Home() {
  const theme = useContext(themecontext);
  const dark = theme.state.dark;
  return (
    <div>
      <style jsx global>
        {`
          *{
            --bg-color:${dark ? '#0d0d0d':''} ;
            --txt-para:${dark ? 'white':''};
            --txt-sec:${dark ? 'white':''};
            --nav-bar:${dark ? 'rgba(13, 13, 13, 0.2)':''};
          }
        `}
      </style>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}



