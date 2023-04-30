import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom';
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {

      dispatch(listProductDetails(id))

     

      }, [dispatch, id]);


  return (
    <>
    <Link className='btn btn-light btn-outline-primary my-3' to='/'>
        Go Back
    </Link>

     {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (

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
      )}
    </>
  )
}

export default ProductScreen
