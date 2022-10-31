import React from 'react'
import Table from 'react-bootstrap/Table';

import { Button } from 'react-bootstrap';
import "./carrito.css"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Carrito = () => {
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
                    <Nav.Link href="#features" className='text-light bg-dark'>Carrito</Nav.Link>
                   
                </Nav>
            </Container>
        </Navbar>




        </><br /><Table striped bordered>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>cantidad</th>
                        <th>Valor </th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nike Air Jordan 3 Retro Og</td>
                        <td>1</td>
                        <td>1.100.000</td>
                        <td>1.100.000</td>
                    </tr>
                    <tr>
                        <td>Bad Bunny x adidas Powerphase</td>
                        <td>2</td>
                        <td>1.200.000</td>
                        <td>2.400.000</td>
                    </tr>

                    <tr>
                        <td>Adidas Yeezy</td>
                        <td>2</td>
                        <td>1.000.000</td>
                        <td>2.000.000</td>
                    </tr>

                    <td colSpan={2}>Total</td>
                    <td>   5.500.000</td>


                </tbody>
            </Table><Button id="comprar">Finalizar Compra</Button><Button id="cancelar">Cancelar</Button></>

            
            
            
       


              
                    
                        
                    
                        
       
    )
}

export default Carrito;