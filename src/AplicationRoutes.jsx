import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Lessons from './pages/lessons/Lessons'
import Menu from './components/menu/Menu'

function ApplicationRoutes(){
  return(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Lessons" element={<Lessons />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
  </BrowserRouter>
  )
}
export default ApplicationRoutes