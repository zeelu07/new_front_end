import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Website/Common/Header'
import Footer from './Website/Common/Footer'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Not404 from './Website/Pages/Not404'
import Blog from './Website/Pages/Blog'
import Contact from './Website/Pages/Contact'
import Gallery from './Website/Pages/Gallery'
import Price from './Website/Pages/Price'
import Service from './Website/Pages/Service'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Aheader from './Admin/Acommon/Aheader'
import Dash from './Admin/Apages/Dash'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/404' element={<Not404 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/price' element={<Price />} />
        <Route path='/service' element={<Service />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonial' element={<Testimonial />} />

        {/* Admin */}
        <Route path='/aheader' element={<Aheader />} />
          <Route path='/dash' element={<Dash />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
