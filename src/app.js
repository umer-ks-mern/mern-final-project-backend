import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "E-Commerce Backend is Working Fine" });
});

app.listen(3301, () => {
    console.log('E-Commrce ka Backend Server Port: 3301 py active ha');
})