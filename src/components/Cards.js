import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD, sen} from '../redux/actions/action';



const Cards = () => {

    const [data] = useState(Cardsdata);
    // console.log(data);

    const dispatch = useDispatch();
    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    return (
        <div style={{
            backgroundImage: `url("https://img.freepik.com/premium-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000")`
        }}>
            <div className='container mt-3'>
                <font color="orange">
                    <h2 className='text-center'>Shop And Hop </h2>
                </font>
                <div className="row d-flex justify-content-center align-items-center">{
                    data.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style ">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price: {element.price} ₹
                                        </Card.Text>
                                        <Card.Text>
                                            Description: {element.desc} 
                                        </Card.Text>

                                        <div className='button_div '>
                                            <Button variant="primary" onClick={() => sen()}
                                                className="">Full Details</Button>
                                            <div class="btnspace"></div>

                                            <Button variant="primary"
                                                onClick={() => send(element)}
                                                className="">Add to cart</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }


                </div>
            </div>
        </div>
    )
}

export default Cards