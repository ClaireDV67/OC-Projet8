import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Error from '../../pages/Error/Error'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../style/global-style.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
