const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mysql = require('mysql2')

const app = express()
app.use(cors())

app.use(express.json())

  const survivors = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'SiezingTomorrowToday',
    password: 'mhc22Lde55s'
  });
  console.log('Users DB Connected')

// routes
app.get('/', (req, res) => {
    res.send('<h1>Express App</h1>')
})

var password
var email
app.post('/login', (req, res) => {
    survivors.query('SELECT * FROM users WHERE email="' + req.body.data.email + '" AND password="' + req.body.data.password + '"', (err, results) => {
        if (err) throw err
        console.log('Successful Logged In')
    })
})

app.get('/jwt', (req, res) => {
    survivors.query('SELECT * FROM users WHERE password="' + password + '" email="' + email + '"')
})

app.post('/intakeForm', (req, res) => {
    const sql = 'INSERT INTO survivors (fname, lname, email, age, github, injuryDate, injuryType, accidentAge, typeOfDev, class1, class2, class3, hasWaiver, employee, today) VALUES ("' + req.body.data.fname + '","' + req.body.data.lname + '","' + req.body.data.email + '","' + req.body.data.age + '","' + req.body.data.github + '","' + req.body.data.injuryDate + '","' + req.body.data.injuryType + '","' + req.body.data.accidentAge + '","' + req.body.data.typeOfDev + '","' + req.body.data.class1 + '","' + req.body.data.class2 + '","' + req.body.data.class3 + '","' + req.body.data.hasWaiver + '","' + req.body.data.employee + '","' + req.body.data.today + '");'
    survivors.query(sql, (err, results) => {
        if (err) {
            console.log(sql)
            throw err
        }
        console.log(results)
    })
    res.end()
    console.log('Form submitted')
})

app.post('/delete', (req, res) => {
    survivors.query('DELETE FROM survivors WHERE ')
})

app.get('/survivors', (req, res) => {
    survivors.query('SELECT * FROM survivors', (err, results) => {
        if (err) throw err
        res.send(results)
    })
})

const server = app.listen(process.env.PORT || 8081, () => {
    console.log('Server is running at on port '+ (process.env.PORT || 8081))
  })



