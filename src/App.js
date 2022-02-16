import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/home'
import Work from './pages/work'
import Contact from './pages/contact'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;