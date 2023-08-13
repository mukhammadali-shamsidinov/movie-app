
import { createContext, useEffect, useState } from 'react';
import './App.css';
import RegistrationForm from './components/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/Login';
import Home from './pages/Home';
import Details from './pages/Details';
import SplitWithImage from './pages/Details';
import Contact from './pages/Contact';
import NavbarApp from './components/Navbar.jsx'
import Footer from './components/Footer';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config';
export const Context = createContext()

function App() {
  const [movies,setMovies] = useState([])
const navigate = useNavigate()


  
  function detailPages(movie){
    navigate(`home/detail/${movie.title.trim()}`)
    console.log(movie);
  }

  useEffect(()=>{
    onSnapshot(collection(db,'users'),(snapshot)=>{
      setMovies(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
  },[])

  return ( 
    <Context.Provider value={{movies,detailPages}}>
      <div className="app">                                                                                               
        <Routes>
          <Route path='/' element={
            <div className="register">
              <RegistrationForm />
            </div>
          } />
          <Route path='/login' element={
            <div className="register">
              <LoginForm />
            </div>} />
            <Route path='/home' element={<Home />} />
            <Route path='home/detail/*' element={
            <>
            <NavbarApp />
            <SplitWithImage />
            <br /><br />
            <Footer  />
            </>
      
            
            } />
            <Route path='/home/contact' element={<Contact />} />
        </Routes>


      </div>
    </Context.Provider>
  );
}

export default App;
