import { title } from "process"
import styled from 'styled-components'



const CartItem = ({data, deleteFromCart}) => {

    const {price, title, img, id, quantity} = data

    return (
        <div className="cart-item">
            <CardContainer>
            <Image src= {img} alt='' />
            <figcaption>
                <CardTitle>{title}</CardTitle>
            </figcaption>
            <CardText>$ {price} x {quantity}= $ {price * quantity}</CardText>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
            </CardContainer>
        </div>
    )
}

export default CartItem

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
