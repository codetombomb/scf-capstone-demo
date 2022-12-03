import DeliveryCard from '../DeliveryCard/DeliveryCard'
import './CardContainer.css'

function CardContainer({deliveries}) {
  return (
    <div className='card-container'>
        {deliveries.map(delivery => {
            return <DeliveryCard key={delivery.id} delivery={delivery}/>
        })}
    </div>
  )
}
export default CardContainer