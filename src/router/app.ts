const express = require("express");
const cors = require("cors");

const {controllerDebug} = require("../controller/controllerDebug");
const {controllerPayment} = require("../controller/controllerPayment");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
    {origin: '*'}
));

app.get("/api/debug", controllerDebug);
app.post("/api/payment", controllerPayment);

export {app}