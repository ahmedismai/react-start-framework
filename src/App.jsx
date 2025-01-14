
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio/Portfolio';
import Notfound from './components/Notfound/Notfound';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import 'flowbite-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





// let x = createBrowserRouter([
//   {path: "react-start-framework" , element: <Layout/>, children:[
//     {index: true , element: <Home/>},
//     {path: "about" , element: <About/>},
//     {path: "portfolio" , element: <Portfolio/>},
//     {path: "contact" , element: <Contact/>},
//     {path: "*" , element: <Notfound/>},
//   ]},
// ])

function App() {
  return (
    <Router basename="/react-start-framework">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );

//--------------------------------anther answer--------------------------------
  //return <RouterProvider router={x}></RouterProvider>
}

export default App
