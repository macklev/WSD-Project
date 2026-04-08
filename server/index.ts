import express from "express"
import usersController from "./controllers/users"

const PORT = 3000
const SERVER = "localhost"

const app = express()

app
.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "*")
  next()
}).use(express.json()) 

app
  .use(express.json())
  .use("/users", usersController)
  .get('/', (_req, res) => {
    res.send('Hello World!')
  })
  .get("/suny", (req,res) => {
    res.send("Hi!")
  })

app.listen(PORT, () => {
  console.log(`Server is running on http://${SERVER}:${PORT}`);
})

console.log("Listening for requests...")