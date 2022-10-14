import { FlexDiv, Square } from './styles'

const OrderView = ({ orders }) => {
  return (
    <FlexDiv>
      {orders?.map((order, index) => (
        <Square key={index}>{order}</Square>
      ))}
    </FlexDiv>
  )
}

export default OrderView
