require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");
const User = require("./models/user");
const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";

const app = express();

app.use(bodyParser.json());
app.use(express.json());

const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// NEED DATABASE FOR TOKENS
let refreshTokens = [];

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

app.post("/login", (req, res) => {
  // Authenticate User

  // NEED DATABASE FOR USERS
  const users = [];

  app.get("/users", (req, res) => {
    res.json(users);
  });

  app.post("/users", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(salt);
      console.log(hashedPassword);

      const user = { name: req.body.name, password: hashedPassword };
      users.push(user);
      res.status(201).send();
    } catch {
      res.status(500).send();
    }
  });
  app.post("/users/login", async (req, res) => {
    const user = users.find((user) => (user.name = req.body.name));
    if (user == null) {
      return res.status(400).send("User cannot be found");
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send("Logged in");
      } else {
        res.send("Wrong password");
      }
    } catch {
      res.status(500).send();
    }
  });

  // AUTHENTICATION ENDS

  const email = req.body.email;
  const user = { name: email };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(4000);
