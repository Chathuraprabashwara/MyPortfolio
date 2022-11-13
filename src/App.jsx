import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experince/Experience'
import Service from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
<>
<Nav/>
<Header/>
<About/>
<Experience/>
<Service/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>
</>
  )
}

export default App