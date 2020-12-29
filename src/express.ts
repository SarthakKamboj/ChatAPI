import express from "express"
import { createUser } from "./User/useCases"

const app = express()

app.get("/createUser", (req, res) => {
    const name = req.body.name
    const { id, errors } = createUser({ name })
    if (errors) {
        return res.send(errors)
    }
    return res.send({
        userId: id
    })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})