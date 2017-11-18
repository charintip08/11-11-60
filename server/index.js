const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }

    let l = req.query.lang
    console.log(l)


    if (!l) {
        res.json({ message: 'Hello' })
    } else {
        res.json({ message: lang[l] })
    }


})
let students = [
    { id: '1', name: 'sirirat', lastname: 'chamthaw', studentid: '58160639', faculty: 'IT' },
    {
        id: '2', name: 'waroon', lastname: 'larpsrisawad', studentid: '58160639', faculty: 'IT'
    }]


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/students', (req, res) => {
    let student = req.body
    student.id = students.length + 1
    students.push(student)
    res.status(201).json(student)
})
app.get('/students', (req, res) => {

    res.status(200).json(students)
})

app.get('/students/:id', (req, res) => {
    let id = req.params.id
    if (!id || isNaN(id)) {
        res.status(400).json({ errorMessage: "This api required `id` parameter" })
        return
    }
    res.json(students[req.params.id - 1])
})


module.exports = app