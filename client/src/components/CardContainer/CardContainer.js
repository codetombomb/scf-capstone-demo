import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import DeliveryCard from '../DeliveryCard/DeliveryCard'
import './CardContainer.css'

function CardContainer() {
  const { deliveries } = useContext(UserContext)

  return (
    <div className='card-container'>
        {deliveries.map(delivery => {
            return <DeliveryCard key={delivery.id} delivery={delivery}/>
        })}
    </div>
  )
}
export default CardContainer