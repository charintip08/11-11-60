const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

let students = [
    { id :1, name: 'Charintip', email: '58160378@go.buu.ac.th'},
    { id :2, name: 'Pavarisa', email: '58160379@go.buu.ac.th'}
]

app.post('/students', (req, res) => {
    let student =req.body
    students.push(student)
    res.json(student)
})

app.get('/students', (req, res) => {
    res.json(students)
})

app.get('/greeting', (req, res) => {
   res.json({message: 'Hello!'})
})
module.exports = app//หากมีใครเรียกใช้งานจะนำmodule ไปใช้ด้วย