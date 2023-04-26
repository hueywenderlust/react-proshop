import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='my-3 p3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
        </Link>

        <Card.Body>
            <Card.Title as='div'>
                <Link to={`/product/${product._id}`}>
                    <h5>{product.name}</h5>
                </Link>
            </Card.Title>

            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </div>
            </Card.Text>

            <Card.Text as='h3'>
                ${product.price} 
            </Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Product
