import { useContext } from "react";
import CardContainer from "../CardContainer/CardContainer";

import { UserContext } from "../../context/UserContext";

import "./Home.css";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="home">
      <p>Welcome {user.username}!</p>
      <CardContainer />
    </div>
  );
}
export default Home;
