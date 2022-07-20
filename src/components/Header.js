import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DLT } from '../redux/actions/action';

const Header = () => {

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);

    const [price, setPrice] = useState(0);
    console.log(price);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                        <div class="btn2space"></div>
                        <NavLink to="/About" className="text-decoration-none text-light">About Us</NavLink>
                        <div class="btn2space"></div>
                        <NavLink to="/ContactForm" className="text-decoration-none text-light">Contact-Us</NavLink>
                        <Nav className="me-auto"></Nav>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Model Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>

                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price:{e.price}₹</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {"111,800"}</p>
                                    </tbody>
                                </Table>

                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>

                            </div>
                    }
                </Menu>
            </Navbar>
        </>
    )
}

export default Header