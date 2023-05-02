import React from 'react'
import { Banner } from './Banner'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import {Newsletter} from './Newsletter'
import {Footer} from './Footer'


function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home