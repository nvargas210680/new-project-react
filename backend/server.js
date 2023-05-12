import express from "express";

const app = express();

const PORT = 5050;

app.use(express.json());
app.get("*", (req, res) => res.send("<h1>Hello there Jerald<h1>"));
app.get("/", (req, res) => res.send("<h1>I learnt something new today</h1>"));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
