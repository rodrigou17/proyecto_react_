import styled from 'styled-components'
import React from 'react'


const Product = ({data, addToCart}) => {

    const {title, img, price, id} = data

    return (
        <div className="product">
            <CardContainer>
            <Image src= {img} alt='' />
            <figcaption>
                <CardTitle>{title}</CardTitle>
            </figcaption>
            <CardText>{price}</CardText>
            <button onClick={() => addToCart(id)}>Agregar</button>
            </CardContainer>
        </div>
    )
}

export default Product

const CardContainer = styled.figure`
  width: 270px;
  height: 400px;
  text-align: left;
`

const Image = styled.img`
  width: 100%;
  height: 70%;
  border: 1.8px solid black;
  border-radius: 1.3rem;
  object-fit: contain;
`

const CardTitle = styled.h3`
  font-family: arial; 
`

const CardText = styled.p`
  font-size: 1.1rem;
  font-family: arial;
  color: gray; 
  margin-bottom: 0.8rem;
`
