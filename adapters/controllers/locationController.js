const pool = require("../db");

const getGPS = (req, res) => {
  pool.query("SELECT * FROM log_location ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addGPS = (req, res) => {
  const log_location = req.body;

  pool.query(
    `INSERT INTO log_location (vehicle_id,device_id,latitude,longitude) 
    VALUES ('${log_location.vehicle_id}','${log_location.device_id}','${log_location.latitude}','${log_location.longitude}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('Location log sent.')
      });
    }
  );
};


module.exports = {
  getGPS,
  addGPS,
};