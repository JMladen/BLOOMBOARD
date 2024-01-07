// // import React from "react";
// // import "./CollectionItem.scss";

// // export default function CollectionItem({ items, addToCart }) {
// //   return (
// //     <div className="collection-item">
// //       <img src={items.img} className="image" alt="plant" />
// //       <div className="desc-con">
// //         <p className="description">{items.subtype}</p>
// //       </div>

// //       <div className="bottom-con">
// //         <p className="price">${items.price}</p>
// //         <button onClick={() => addToCart(items)} className="add-to-cart-button">
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// // CollectionItem.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./CollectionItem.scss";

// export default function CollectionItem({ items, addToCart }) {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(items);
//     // Navigate to the desired page (replace '/cart' with your target route)
//     navigate("/cart");
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
// CollectionItem.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionItem.scss";

export default function CollectionItem({ items, addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(items);
    // navigate("/Explore");
  };

  return (
    <div className="collection-item">
      <img src={items.img} className="image" alt="plant" />
      <div className="desc-con">
        <p className="description">{items.subtype}</p>
      </div>

      <div className="bottom-con">
        <p className="price">${items.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
