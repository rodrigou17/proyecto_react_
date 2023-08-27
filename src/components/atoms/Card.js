import styled from 'styled-components'
import React from 'react'


const Card = (props) => {
  return (
    <CardContainer>
      <Image src= {props.data.img} alt='' />
      <figcaption>
        <CardTitle>{props.data.title}</CardTitle>
      </figcaption>
      <CardText>{props.data.price}</CardText>
    </CardContainer>
  )
}

export default Card

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
