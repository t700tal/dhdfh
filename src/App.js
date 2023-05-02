import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Routes from './components/Routes'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
