import React from 'react';
import './App.css'
import NavBar from './components/layout/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Productos from './components/productos';
import Footer from './components/layout/Footer';


function App() {
  return (

     
      <div className="Tienda">
        <NavBar/>
        <h2>Popular ahora</h2>
        <Productos/>
        <Footer/>
    
        
    
       
        </div>
     
      
  );
}

export default App;


