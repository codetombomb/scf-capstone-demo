import DeliveryCard from "../DeliveryCard/DeliveryCard";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./CardContainer.css";

function CardContainer() {
  const { deliveries } = useContext(UserContext)
  return (
    <div className="card-container">
      {deliveries.map((delivery) => {
        return (
          <DeliveryCard
            key={uuidv4()}
            delivery={delivery}
            customer={delivery.customer_name}
            customerAddress={delivery.address}
            orders={delivery.orders}
          />
        );
      })}
    </div>
  );
}
export default CardContainer;
