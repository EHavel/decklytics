const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')({ origin: true })

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()
const app = express()
const main = express()

main.use('/api', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

exports.webApi = functions.https.onRequest(main)

// app.post("/todo", (req, res) => {
//     cors(req, res, () => {
//         db.collection("todo")
//             .add(req.body)
//             .then((ref) => {
//                 res.status(200).send({
//                     id: ref.id
//                 })
//             })
//     })
// })

app.get("/crosswords", (req, res) => {
    cors(req, res, () => {
        db.collection("crosswords")
            .get()
            .then((snapshot) => {
                let r = {
                    questions: [],
                    answers: []
                }

                snapshot.forEach(item => {
                    let data = item.data()

                    r.questions.push(data.question)
                    r.answers.push(data.answer)
                })

                res.status(200).send(r)
            })
    })
})