const express = require("express");
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:3001";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://htuser:mypassword@cluster0.mongodb.net/HiddenTreasures",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
const port = 3001;
const router = express.Router();
const Item = require("../models/Item"); // Définissez votre modèle MongoDB

// Exemple de route pour récupérer tous les items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err.message });
  }
});

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db("HiddenTreasures");
  const collection = db.collection("listingsAndCategories");
});

app.post("/api/data", (req, res) => {
  const filters = req.body.filters;
  let query = {};

  // Construire la requête en fonction des filtres reçus
  for (const [key, value] of Object.entries(filters)) {
    if (value) {
      // Si le filtre est true/actif
      query[key] = value; // Adaptez cette ligne selon votre logique de filtrage
    }
  }

  collection
    .find(query)
    .toArray()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => console.error(error));
});

// Ajoutez d'autres routes pour créer, mettre à jour, et supprimer des items
