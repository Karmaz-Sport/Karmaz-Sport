
import React from "react";
import SearchIcon from "@material-ui/icons/Search"
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{BsSearch} from "react-icons/bs";
import{BsFillCartFill } from "react-icons/bs";





const NavBar = () => {
    return(
    <Fragment>
    <Navbar bg="dark" variant="dark">
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="" alt="Karmaz-Sport"></img>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='¿Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn" >
                            <BsSearch  color="white"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center" >
                    <span><button  id="login_btn2">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    
                    <BsFillCartFill color="white "  />
                    <span id="cart_count"  class=" bg-primary text-white">1</span>
                </div>

                

                </Navbar>
     </Fragment>
 )




}

export default NavBar