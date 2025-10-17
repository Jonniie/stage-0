import express from "express";

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400');

    res.setHeader("Content-Type", "application/json")
    next();
  });

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Server is running, visit /me for user data" });
});

app.get("/me", async (req, res) => {
  const me_data = {
    status: "success",
    user: {
      email: "jtech2096@gmail.com",
      name: "John Areola",
      stack: "Node.js/Express",
    },
    timestamp: new Date().toISOString(),
    fact: "",
  };

  try {
    const data = await fetch("https://catfact.ninja/fact");
    const fact = await data.json();
    me_data.fact = fact.fact;
    res.status(200).json(me_data);
  } catch (error) {
    me_data.fact = "Unable to fetch cat fact at this time";
    me_data.status = error.message;
    console.error(error);
    res.status(500).json(me_data);
  }
});

app.use((req, res) => {
  res
    .status(404)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Route not found, visit /me for user data" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
