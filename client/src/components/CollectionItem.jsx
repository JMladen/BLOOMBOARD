// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./CollectionItem.scss";

// export default function CollectionItem({ items, addToCart }) {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(items);
//     // navigate("/Explore");
//   };

//   return (
//     <div className="collection-item">
//       <img src={items.img} className="image" alt="plant" />
//       <div className="desc-con">
//         <p className="description">{items.subtype}</p>
//       </div>

//       <div className="bottom-con">
//         <p className="price">${items.price}</p>
//         <button onClick={handleAddToCart} className="add-to-cart-button">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./CollectionItem.scss";

// export default function CollectionItem({ plant, addToCart }) {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(plant);
//     // You can uncomment the line below if you want to navigate to "/explore" after adding to cart
//     // navigate("/explore");
//   };

//   return (
//     <div className="collection-item">
//       <img src={plant.img} className="image" alt="plant" />
//       <div className="desc-con">
//         <p className="description">{plant.subtype}</p>
//       </div>
//       <div className="bottom-con">
//         <p className="price">${plant.price}</p>
//         <button onClick={handleAddToCart} className="add-to-cart-button">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionItem.scss";

export default function CollectionItem({ plant, addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(plant);
    // You can uncomment the line below if you want to navigate to "/explore" after adding to cart
    // navigate("/explore");
  };

  return (
    <div className="collection-item">
      <img src={plant.img} className="image" alt="plant" />
      {/* <div className="desc-con"> */}
      {/* </div> */}
      <div className="bottom-con">
        <p className="description">{plant.subtype}</p>

        <p className="price">${plant.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
