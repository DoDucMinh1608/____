const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'src', "views"));

