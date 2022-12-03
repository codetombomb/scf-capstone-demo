import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

import CardContainer from '../CardContainer/CardContainer'
import './Home.css'

function Home() {
  const { user } = useContext(UserContext)
  return (
    <div className='home'>
      <p>Welcome {user.username}!</p>
      <CardContainer />
    </div>
  )
}
export default Home