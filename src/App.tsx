
import './App.css'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import  Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Alert from './components/layout/Alert.jsx'
import Home from '././pages/Home.jsx'
import About from '././pages/About.jsx'
import NotFoundPage from '././pages/NotFoundPage.jsx';
import  {GithubProvider} from './context/github/GithubContext.jsx'
import  {AlertProvider} from './context/alert/AlertContext.jsx'




function App() {

  return (
   <GithubProvider>
    <AlertProvider>
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className='mx-auto px-3 container'>
                       <Alert />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/page-not-found' element={<NotFoundPage />} />
                        <Route path='/*' element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    </AlertProvider>
   </GithubProvider>
  )
}

export default App
