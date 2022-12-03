import OrderInfo from "../OderInfo/OrderInfo";
import { v4 as uuidv4 } from "uuid";
import "./DeliveryCard.css";

function DeliveryCard({ delivery, customer, customerAddress, orders }) {
  return (
    <div className="delivery-card">
      <h2>{customer}</h2>
      <p>{customerAddress}</p>
      {orders.map(({ total_price, tip, payment_type }) => (
        <OrderInfo
          key={uuidv4()}
          total={total_price}
          tip={tip}
          paymentType={payment_type}
        />
      ))}
    </div>
  );
}
export default DeliveryCard;
