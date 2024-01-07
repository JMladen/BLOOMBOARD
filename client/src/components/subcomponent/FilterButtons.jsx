// import React, { useContext } from "react";
// import { Context } from "../../Context";
// import "./FilterButtons.scss";

// export default function FilterButton({ name }) {
//   // const { querySearch, searchItem } = useContext(Context);

//   // console.log(querySearch);

//   return (
//     <>
//       <button className="collection-button">{name}</button>
//     </>
//   );
// }
// //   return (
// //     <button className="collection-button" onClick={() => searchItem(name)}>
// //       {name}
// //     </button>
// //   );
// // }
import React from "react";
import "./FilterButtons.scss";

export default function FilterButtons({ name, onFilterClick }) {
  const handleFilterClick = () => {
    // Call the onFilterClick function with the selected filter name
    onFilterClick(name);
  };

  return (
    <button className="filter-button" onClick={handleFilterClick}>
      {name}
    </button>
  );
}
