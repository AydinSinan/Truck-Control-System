const express = require("express");
const app = express();

// Route Part
const vehicleRoute = require("./adapters/routes/vehicleRoute");
const deviceRoute = require("./adapters/routes/deviceRoute");
const deviceTypeRoute = require("./adapters/routes/deviceTypeRoute");
const temperatureRoute = require("./adapters/routes/temperatureRoute");
const locationRoute = require("./adapters/routes/locationRoute");

// Middlware Part
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Postman Part
app.get('/', (req, res, next) => {
    res.send(`Get method is using here.`)
    next();
  })

  app.post('/', (req, res, next) => {
    res.send(`Post Method is using here.Safer than Get Method.`)
    next();
  })

  app.put('/', (req, res, next) => {
    res.send(`Put method using for Update.`)
    next();
  })

  app.delete('/', (req, res, next) => {
    res.send(`Delete method using for delete.`)
    next();
  })

app.use("/vehicles", vehicleRoute)
app.use("/device", deviceRoute)
app.use("/devices_type", deviceTypeRoute)
app.use("/log_temperature", temperatureRoute)
app.use("/log_location", locationRoute)

app.listen(3000, () => {
    console.log('Server is starting... ');
  });
