import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ApplicationRoutes from './AplicationRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
      <Footer />
     
    </div>
  )
}

export default App
