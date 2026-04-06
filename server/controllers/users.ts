import { Router } from "express"
import { getAll, get, create, update, remove } from "../models/users"
import {User, DataEnvelope, DataListEnvelope } from "../types"

const app = Router()

app.get("/", (_req, res) => {
    const users = getAll().map((x) => ({
        ...x,
        password: undefined,
    }))
    const response: DataListEnvelope<User> = {
        data: users,
        isSuccess: true,
        total: users.length,
    }
    res.send(response)
})
    .get("/count", (_req, res) => {
        const count = getAll().length
        res.send({ count })
    })
    .get("/:id", (req, res) => {
        const { id } = req.params
        const user = get(parseInt(id))
        res.send(user)
    })
    .post("/", (req, res) => {
        const newUser = create(req.body)
        res.send(newUser)
    })
    .patch("/:id", (req, res) => {
        const { id } = req.params
        const updatedUser = update(parseInt(id), req.body)
        res.send(updatedUser)
    })
    .delete("/:id", (req, res) => {
        const { id } = req.params
        const removedUser = remove(parseInt(id))
        res.send(removedUser)
    })

export default app