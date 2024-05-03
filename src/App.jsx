import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const menuItems = [
    { texto: 'Home', link: '/' },
    { texto: 'Sobre', link: '/sobre' },
    { texto: 'Projetos', link: '/projetos' },
    { texto: 'Curriculo', link: '/curriculo' },
    { texto: 'Contato', link: '/contato' },
  ]

  return (
    <>

    </>
  )
}

export default App
