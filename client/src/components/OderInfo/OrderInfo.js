import './OrderInfo.css'

function OrderInfo({total, tip, paymentType}) {
  return (
    <div className='order-info'>
        <p>Total: {total}</p>
        <p>Tip: {tip}</p>
        <p>Payment Type: {paymentType}</p>
    </div>
  )
}
export default OrderInfo