const pool = require("../db");

const getTemps = (req, res) => {
  pool.query("SELECT * FROM log_temperature ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addTemp = (req, res) => {
  const log_temperature = req.body;

  pool.query(
    `INSERT INTO log_temperature (vehicle_id,device_id,read_data) 
    VALUES ('${log_temperature.vehicle_id}','${log_temperature.device_id}','${log_temperature.read_data}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('Temperature log was sent.')
      });
    }
  )
};


module.exports = {
  getTemps,
  addTemp,
};