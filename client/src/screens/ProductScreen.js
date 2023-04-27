import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const ProductScreen = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({}); 

    useEffect(() => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/api/products/${id}`);
    
          setProduct(data)
        } 
    
        fetchProduct()
      }, [id]);


    // const product = products.find((p) => String(p._id) === id);


  return (
    <>
    <Link className='btn btn-light btn-outline-primary my-3' to='/'>
        Go Back
    </Link>

    <Row>
        <Col md={7} >
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={5} >
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h4>{product.name}</h4>
                </ListGroupItem>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>

                <ListGroup.Item>
                    Description: {product.description} 
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2 className='productPrice'>${product.price}</h2> 

                    <ListGroupItem>
                        <Row>
                            {/* <Col>Status:</Col> */}
                            <Col><strong>{product.countInStock > 0 ? 'In stock': 'Out of stock'}</strong></Col>
                        </Row>
                    </ListGroupItem>

                    <Row className='buttonContainer'>
                        <Col>
                            <Button className='btn btn-block btn-info' type='button'>
                                Add to wishlist
                            </Button>
                        </Col>

                        <Col>
                            <Button className='btn btn-block btn-success' type='button' disabled={product.countInStock === 0 }>
                                Add to Cart
                            </Button>
                        </Col>

                        
                    </Row>
                  
                   
                </ListGroup.Item>
            </ListGroup>
        </Col>
        

    </Row>
    </>
  )
}

export default ProductScreen
