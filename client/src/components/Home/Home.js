import CardContainer from '../CardContainer/CardContainer'
import './Home.css'
function Home({user, deliveries}) {
  console.log(deliveries)
  return (
    <div className='home'>
      <p>Welcome {user.username}!</p>
      <CardContainer deliveries={deliveries}/>
    </div>
  )
}
export default Home