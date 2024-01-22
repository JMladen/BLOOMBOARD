// Signup.jsx
// import React, { useState } from "react";
// import "./Signup.scss";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const response = await fetch("/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // Handle successful signup, e.g., redirect to login page
//         console.log("Signup successful!");
//       } else {
//         // Handle signup error
//         console.error("Signup failed");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignup}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
// Signup.jsx
// import React, { useState } from "react";
// import "./Signup.scss";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // Handle successful signup
//         console.log("Signup successful!");
//       } else {
//         // Log the detailed error information
//         const errorData = await response.json();
//         console.error("Signup failed:", errorData.error);
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignup}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./Signup.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("Signup successful!");

        // Navigate to the home page ("/") after successful signup
        window.location.href = "/";
      } else {
        // Log the detailed error information
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const combinedClickHandler = () => {
    // Add any common actions that need to be performed for both clicks
    handleSignup();
    // Navigate to the home page ("/") after signing up
    window.location.href = "/";
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          {/* Use the combinedClickHandler in the onClick attribute */}
          <button type="button" onClick={combinedClickHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
