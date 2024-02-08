import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Registration from './components/Register'
import Login from './components/Login'
import DocumentDetails from './components/DocumentDetails'
import Documents from './components/Documents'
import DocumentHome from './pages/DocumentHome'
function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/Documents' element={<DocumentHome/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/documents/:documentName' element={<DocumentDetails/>}/>
    </Routes>
  )
}

export default App
