import express from "express";

const app = express();

app.get("*", (req, res) => {
  res.send({ hello: "express" });
});

app.listen(3000, (error) => {
  if (error) console.log(error);
  else console.log("Server is running on http://localhost:3000");
});
