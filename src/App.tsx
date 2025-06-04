
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  Navbar from  './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className='mx-auto px-3 container'>
            Content
          </main>
            <Footer />
        </div>
    </Router>
  )
}

export default App
