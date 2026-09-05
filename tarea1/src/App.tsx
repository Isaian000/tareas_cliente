import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


//Importacion de componentes
import Hero from './components/Hero'
import About from './components/About'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'
import Educacion from './components/Educacion'
import Hobbies from './components/Hobbies'
import ContactForm from './components/ContactForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Proyectos />
      <Tecnologias />
      <Educacion />
      <Hobbies />
      <ContactForm />
    </>
  )
}

export default App;
