const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const courseCard = [
  {
    id: 1,
    title: "A complete guide to design",
    description: "Adobe Guide, Layes, Smart Objects etc...",
    img: "https://preview.colorlib.com/theme/course/images/course_1.jpg.webp",
    price: 29,
  },
  {
    id: 2,
    title: "A complete guide to design",
    description: "Beginners guide to HTML",
    img: "https://preview.colorlib.com/theme/course/images/course_2.jpg.webp",
    price: 30,
  },
  {
    id: 3,
    title: "A complete guide to design",
    description: "Advanced Photoshop",
    img: "https://preview.colorlib.com/theme/course/images/course_3.jpg.webp",
    price: 44,
  },
];
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send(courseCard));

app.get("/:id", (req, res) => {
  let id = req.params.id;
  let idData = courseCard.find((a) => a.id == id);
  res.send(idData);
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
