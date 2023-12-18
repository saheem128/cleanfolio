import React from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Footer from '../../components/Footer/Footer'

const HomeScreen = () => (
  <>
    <Header />

    <main>
      <About />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </main>

    <ScrollToTop />
    <Footer />
  </>
)

export default HomeScreen
