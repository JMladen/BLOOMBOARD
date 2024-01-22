// import React from "react";

// const ShoppingCart = ({ cart }) => {
//   return (
//     <section>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             <img src={item.img} alt={item.subtype} />
//             <h3>{item.subtype}</h3>
//             <p>${item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ShoppingCart;
// import React from "react";
// import "./ShoppingCart.scss";
// import back from "../images/back.png";

// const ShoppingCart = ({ cart }) => {
//   return (
//     <section className="shopping-cart-con">
//       <div className="alt-nav">
//         {/* <button className="back-btn" onClick={() => navigate("/")}> */}
//         <button className="back-btn">
//           <a className="logo-text" href="/explore">
//             <img className="img-logo" src={back} alt="back" />
//           </a>
//         </button>
//       </div>
//       <h1>SHOPPING CART</h1>
//       <ul className="cart-list">
//         {cart.map((item) => (
//           <li key={item.id} className="cart-item">
//             <img src={item.img} alt={item.subtype} />
//             <h3>{item.subtype}</h3>
//             <p>${item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ShoppingCart;
// import React from "react";
// import "./ShoppingCart.scss";
// import back from "../images/back.png";

// const ShoppingCart = ({ cart }) => {
//   return (
//     <section className="shopping-cart-con">
//       <div className="alt-nav">
//         <button className="back-btn">
//           <a className="logo-text" href="/explore">
//             <img className="img-logo" src={back} alt="back" />
//           </a>
//         </button>
//       </div>
//       <h1>SHOPPING CART</h1>

//       {cart.length === 0 ? (
//         <p>The Cart is Empty</p>
//       ) : (
//         // <button />

//         <ul className="cart-list">
//           {cart.map((item) => (
//             <li key={item.id} className="cart-item">
//               <img src={item.img} alt={item.subtype} />
//               <h3>{item.subtype}</h3>
//               <p>${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default ShoppingCart;
import React from "react";
import "./ShoppingCart.scss";
import back from "../images/back.png";

const ShoppingCart = ({ cart }) => {
  return (
    <section className="shopping-cart-con">
      <div className="alt-nav">
        <button className="back-btn">
          <a className="logo-text" href="/explore">
            <img className="img-logo" src={back} alt="back" />
          </a>
        </button>
      </div>
      <h1>SHOPPING CART</h1>

      {cart.length === 0 ? (
        <div className="shopping-cart-subcon">
          <p>The Cart is Empty</p>
          <button
            className="empty-button"
            onClick={() => (window.location.href = "/explore")}
          >
            Explore Our Collection
          </button>
        </div>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.subtype} />
                <h3>{item.subtype}</h3>
                <p>${item.price}</p>
                {/* Add a "Remove" button for each item */}
                {/* <button onClick={() => handleRemoveItem(item.id)}>
                  Remove Item
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
