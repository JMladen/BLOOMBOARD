import React, { useContext } from "react";
import { Context } from "../Context";
import InCartItem from "./subcomponent/CartItem";
import "./CartPage.scss";

export default function CartPage() {
  const { cartPlant } = useContext(Context);

  const yourPlant = cartPlant.map((items) => (
    <InCartItem key={items.id} items={items} />
  ));

  return (
    <div className="cart-page">
      <div className="cart-items">{yourPlant}</div>
    </div>
  );
}
// import React, { useContext } from "react";
// import { Context } from "../Context";
// import InCartItem from "./subcomponent/CartItem";
// import "./CartPage.scss";

// export default function CartPage() {
//   const { cartPlant } = useContext(Context);

//   const yourPlant = cartPlant.map((items) => (
//     <InCartItem key={items.id} items={items} />
//   ));

//   return (
//     <div className="cart-page">
//       <div className="cart-items">{yourPlant}</div>
//     </div>
//   );
// }
