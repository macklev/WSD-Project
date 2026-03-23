import express from "express"
import usersController from "./controllers/users"

const PORT = 3000
const SERVER = "localhost"

const app = express()

app.use(express.json()) 

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