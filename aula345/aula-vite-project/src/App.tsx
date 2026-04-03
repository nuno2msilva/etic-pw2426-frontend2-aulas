
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, About , Blog, Post, Search, NotFound } from './pages/Pages'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<Post/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App