const express = require("express");
const app = express();
const port = 8000;
const cors = require("fs");
const { json } = require("body-parser");

app.use(cors());
app.use(json());
