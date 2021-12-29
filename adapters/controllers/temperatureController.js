const pool = require("../db");

const getTemps = (req, res) => {
  pool.query("SELECT * FROM log_temperature ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const appendTemp = (req, res) => {
  const log_temperature = req.body;

  pool.query(
    `INSERT INTO log_temperature (vehicle_id,device_id,read_data,created_at) 
    VALUES ('${log_temperature.vehicle_id}','${log_temperature.device_id}','${log_temperature.read_data}','${log_temperature.created_at}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('Temperature log is sending.')
      });
    }
  )
};


module.exports = {
  getTemps,
  appendTemp,
};
