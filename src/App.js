import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'


function App() {
const checking = process.env.REACT_APP_IMPORTANT_TOKEN;

console.log(checking);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        {checking}
      </Routes>
    </div>
  )
}

export default App
