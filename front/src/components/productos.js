import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./productos.css"

import CardGroup from 'react-bootstrap/CardGroup'

function Productos() {
    return (
    <div className="container">
            <div className="row gy-3">
             <div className="col-md-4 col-sm-6 col-lg-3">
             <div className='card'>
            <img src='' class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Prueba</h4>
                <p>esta es una Prueba de la tarjeta</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 55.000</p>
                 </div>
                 </div>
                 </div>


                 <div className="col-md-4 col-sm-6 col-lg-3">
             <div className='card'>
            <img src='' class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Prueba</h4>
                <p>esta es una Prueba de la tarjeta</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 55.000</p>
                 </div>
                 </div>
                 </div>



                 <div className="col-md-4 col-sm-6 col-lg-3">
             <div className='card'>
            <img src=''  class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Prueba</h4>
                <p>esta es una Prueba de la tarjeta</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 55.000</p>
                 </div>
                 </div>
                 </div>


                 <div className="col-md-4 col-sm-6 col-lg-3" id='decoracion' >
             <div className='card'>
            <img src=''  class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Prueba</h4>
                <p>esta es una Prueba de la tarjeta</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 55.000</p>
                 </div>
                 </div>
                 </div>


                 <div className="col-md-4 col-sm-6 col-lg-3" >
             <div className='card'>
            <img src=''  class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Prueba</h4>
                <p>esta es una Prueba de la tarjeta</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 55.000</p>
                 </div>
                 </div>
                 </div>


                 
                  
                  
                  </div>
                  </div>

    

  






      
      );
    
    
     
    }
    
export default Productos;