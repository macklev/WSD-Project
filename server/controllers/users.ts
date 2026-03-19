import {Router} from "express"

const app= Router()

app.get("/users", (_req,res) => {
  res.send([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
  ])
})

.get("/", (_req,res) => {
    const { id } = _req.query
    res.send({ id, name: "John Doe", email: "john.doe@example.com" })
})

.post("/", (_req,res) => {
    const { name, email } = _req.body
    res.send({ id: 3, name, email })
})

.patch("/:id", (_req,res) => {
    const { id } = _req.params
    const { name, email } = _req.body
    res.send({ id, name, email })
})

.delete("/:id", (_req,res) => {
    const { id } = _req.params
    res.send({ message: `User with id ${id} deleted` })
})