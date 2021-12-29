const pool = require("../db");

const getGPS = (req, res) => {
  pool.query("SELECT * FROM log_location ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const appendGPS = (req, res) => {
  const log_location = req.body;

  pool.query(
    `INSERT INTO log_location (vehicle_id,device_id,latitude,longitude,created_at) 
    VALUES ('${log_location.vehicle_id}','${log_location.device_id}','${log_location.latitude}','${log_location.longitude}',${log_location.created_at})`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('log location is sending.')
      });
    }
  );
};


module.exports = {
  getGPS,
  appendGPS,
};
