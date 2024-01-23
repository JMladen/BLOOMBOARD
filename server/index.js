// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/api/plants", (req, res) => {
//   const plantsData = require("./data/plantsData.json");
//   res.json(plantsData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Sample user database (replace this with a database in a real-world application)
const users = [];

app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: "Username already exists" });
  }

  // Add the new user to the database
  users.push({ username, password });

  res.status(201).json({ message: "Signup successful" });
});

app.get("/api/plants", (req, res) => {
  const plantsData = require("./data/plantsData.json");
  res.json(plantsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const mysql = require("mysql2");
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());

// // Create a connection pool for MySQL
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "Bloomboard",
//   password: "rootroot",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // Handle database errors
// pool.on("error", (err) => {
//   console.error("MySQL Pool Error:", err);
// });

// // Endpoint for user signup
// // app.post("/api/signup", (req, res) => {
// //   const { username, password } = req.body;

// //   // Check if the username already exists in the database
// //   pool.query(
// //     "SELECT * FROM users WHERE username = ?",
// //     [username],
// //     (error, results) => {
// //       if (error) {
// //         console.error("MySQL Query Error:", error);
// //         return res.status(500).json({ error: "Internal Server Error" });
// //       }

// //       if (results.length > 0) {
// //         return res.status(400).json({ error: "Username already exists" });
// //       }

// //       // If the username is unique, insert the new user into the database
// //       pool.query(
// //         "INSERT INTO users (username, password) VALUES (?, ?)",
// //         [username, password],
// //         (insertError) => {
// //           if (insertError) {
// //             console.error("MySQL Query Error:", insertError);
// //             return res.status(500).json({ error: "Internal Server Error" });
// //           }

// //           res.status(201).json({ message: "Signup successful" });
// //         }
// //       );
// //     }
// //   );
// // });

// app.post("/api/signup", (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username already exists in the database
//   pool.query(
//     "SELECT * FROM users WHERE username = ?",
//     [username],
//     (error, results) => {
//       if (error) {
//         console.error("MySQL Query Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//       }

//       if (results.length > 0) {
//         return res.status(400).json({ error: "Username already exists" });
//       }

//       // If the username is unique, insert the new user into the database
//       pool.query(
//         "INSERT INTO users (username, password) VALUES (?, ?)",
//         [username, password],
//         (insertError) => {
//           if (insertError) {
//             console.error("MySQL Query Error:", insertError);
//             return res.status(500).json({ error: "Internal Server Error" });
//           }

//           res.status(201).json({ message: "Signup successful" });
//         }
//       );
//     }
//   );
// });

// // Endpoint for fetching plant data
// app.get("/api/plants", (req, res) => {
//   // Sample data for demonstration purposes (replace with actual database query)
//   const plantsData = require("./data/plantsData.json");
//   res.json(plantsData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
