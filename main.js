const express = require("express");
const productos = [];
const app = require("app");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use;
app.get("/", (req, res) => {
  res.render("../views/index"), { productos };
});

app.post("/productos", (req, res) => {
  productos.push(req.body);
  console.log(productos);
  res.redirect("/");
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log("Servidor en escucha en el puerto: "`${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
