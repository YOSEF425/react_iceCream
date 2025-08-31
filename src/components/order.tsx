import { useState } from "react";
import Title from "./header.tsx"; 
import Flavors from "./flavors.tsx";
import '../style/order.css';

export default function Order() {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <>
    <Title />
    <Flavors/>
    </>
  ) : (
    <div>
      <div className="orderFlex">
      <h1 className="welcome">Welcome to the Ice Cream Kiosk</h1>
      <button onClick={() => setClicked(true)} className="orderButton">
        Place An Order
      </button>
      </div>
    </div>
  );
}
