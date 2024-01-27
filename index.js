//stock market data app

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 50000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//set handlebar rooutes

app.get("/", (req, res) => {
  res.render("home", {
    stuff: "this is stuff",
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("server listening on port " + PORT));
