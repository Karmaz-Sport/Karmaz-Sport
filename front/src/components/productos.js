import React from 'react';
import "./productos.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Productos() {
    return (
    <div className="container">
       
            <div className="row gy-3">
            
             <div className="col-md-4 col-sm-6 col-lg-3">
             
             <div className='card'>
             <span class="border border-primary"></span>
            <img src='.\image\jordan1.jpg' class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'> Nike Air Jordan 3 Retro Og</h4>
                <p>La reedición viene completa con la clásica marca Nike Air.</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 1.100.000</p>
                <Stack spacing={1}>
                <Rating name="half-rating-read"  />
                </Stack>
                 </div>
                 </div>
                 </div>
                 


                 <div className="col-md-4 col-sm-6 col-lg-3">
             <div className='card'>
             <span class="border border-primary"></span>
            <img src='.\image\nike1.jpg' class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Nike Epic React Flyknit</h4>
                <p>Rendimiento suave y ligero al siguiente nivel.</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 800.000</p>
                <Stack spacing={1}>
                <Rating name="half-rating-read" />
                </Stack>
                 </div>
                 </div>
                 </div>



                 <div className="col-md-4 col-sm-6 col-lg-3" >
             <div className='card' id='carta'>
             <span class="border border-primary"></span>
            <img src='.\image\badbunny.jpg'  class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Bad Bunny x adidas Powerphase</h4>
                <p>Desde pequeño siempre amé los tenis (zapatillas)</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 1.200.000</p>
                <Stack spacing={1}>
                <Rating name="half-rating-read" />
                </Stack>
                 </div>
                 </div>
                 </div>


                 <div className="col-md-4 col-sm-6 col-lg-3" id='decoracion' >
             <div className='card'>
             <span class="border border-primary"></span>
            <img src='.\image\jordan.jpg'  class="card-img-top" alt='Productos'/>
            <div className="card-body">
                <h4 className='card-title'>Air Jordan I </h4>
                <p>La reedición viene completa con la clásica marca Nike Air, La comidad la tienes aquí</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 950.000</p>
                <Stack spacing={1}>
                <Rating name="half-rating-read" />
                </Stack>
                 </div>
                 </div>
                 </div>


                 <div className="col-md-4 col-sm-6 col-lg-3" >
             <div className='card' >
             <span class="border border-primary"></span>
            <img src='.\image\adidas1.jpg'  class="card-img-top" alt='Productos'/>
            
            <div className="card-body">
                <h4 className='card-title'>Adidas Yeezy</h4>
                <p>una colaboración de moda entre el rapero y empresario estadounidense Kanye West y Adidas.</p>
                <span><button className='btn' id="login_btn"  >Comprar</button></span>
                <p class="precio">$ 1.000.000</p>
                <Stack spacing={1}>
                <Rating name="half-rating-read" />
                </Stack>
                 </div>
                 </div>
                 </div>

                


                 
                  
                  
                  </div>
                  </div>
                  

    

  






      
      );
    
    
     
    }
    
export default Productos;