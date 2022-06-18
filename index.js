const express = require('express')
const app = express()
require("dotenv").config()
const path = require("path")

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const cors = require('cors');
app.use(cors());

const nodemailer = require("nodemailer")


app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.post("/send_mail", (req,res) => {
    // console.log(req.body);
    let data = req.body
    const transport = nodemailer.createTransport({
        service: `hotmail`,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    transport.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_TO,
        subject: `Message from ${data.name} ${data.surname}`,
        html: `
          <h1>
            Hi, my name is ${data.name} ${data.surname}
          </h1>
          <p>I am contacting with you via your page Portfolio!</p>
          <p>My message:</p>
          <p>${data.msg}</p>
          <p>You can contact me with this email: ${data.email} </p>

        `
    })
})

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build','index.html'));
});


 const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

