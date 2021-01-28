const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const oauth2Client = new OAuth2(
    process.env.Client_ID,
    process.env.Client_Secret,
    "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
    refresh_token:process.env.Refresh_Token
})

const accessToken = oauth2Client.getAccessToken()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/contactUs.html");
  });
