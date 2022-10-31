import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const Editar = () => {
    return(
        
        <><><Navbar bg="dark" variant="dark">
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="" alt="Karmaz-Sport"></img>
                </div>
            </div>

            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='text-light bg-dark'>Lista de Productos </Nav.Link>{"  "}
                    <Nav.Link href="#features" className='text-light bg-dark'>Modificar Productos</Nav.Link>
                    <Nav.Link href="#features" className='text-light bg-dark'>Lista de ventas</Nav.Link>
                   
                </Nav>
            </Container>
        </Navbar>







        </><br />



        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Producto</th>
          <th scope='col'>Nombre</th>
          <th scope='col'>Descripción</th>
          <th scope='col'>Precio</th>
          <th scope='col'>Valaración</th>
          <th scope='col'>editar</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='.\image\nike45.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'> Nike Air Jordan 3 Retro Og</p>
            
          </td>
          <td>
          <p className='fw-normal mb-1'>La reedición viene completa con la clásica marca Nike Air.</p>
          </td>
          <td>1.100.000</td>
          <td>5</td>
          <td>
          <Button variant="primary">Editar</Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='.\image\nike451.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              </div>
            </div>
          </td>
          
          <td>
            <p className='fw-normal mb-1'>Nike Epic React Flyknit</p>
            
          </td>
          <td>
          <p>Rendimiento suave y ligero al siguiente nivel.</p>
          </td>
          <td>800.000</td>
          <td>5</td>
          <td>
          <Button variant="primary">Editar</Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='.\image\bad45.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Bad Bunny x adidas Powerphase</p>
         
          </td>
          <td>
          <p>Desde pequeño siempre amé los tenis (zapatillas)</p>
          </td>
          <td>1.200.000</td>
          <td>4</td>
          <td>
          <Button variant="primary">Editar</Button>
          </td>
        </tr>

        
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='.\image\jordan45.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Air Jordan I</p>
            
          </td>
          <td>
          <p>La reedición viene completa con la clásica marca Nike Air, La comodidad la tienes aquí</p>
          </td>
          <td>950.000</td>
          <td>5</td>
          <td>
          <Button variant="primary">Editar</Button>
          </td>
        </tr>



        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='.\image\adidas45.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Adidas Yeezy</p>
          </td>
          <td>
          <p>una colaboración de moda entre el rapero y empresario estadounidense Kanye West y Adidas.</p>
          </td>
          <td>1.000.000</td>
          <td>5</td>
          <td>
          <Button variant="primary">Editar</Button>
          </td>
        </tr>






      </MDBTableBody>
    </MDBTable>




    
      
      



            </>

            
            
            
       


              
                    
                        
                    
                        
       
    )
}

export default Editar;