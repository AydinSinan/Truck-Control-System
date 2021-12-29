const pool = require("../db");

const getDevicesType = (req, res) => {
  pool.query("SELECT * FROM devices_type ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addDeviceType = (req, res) => {
  const device_type = req.body;

  pool.query(
    `INSERT INTO devices_type (device_name,device_description,is_active) 
    VALUES ('${device_type.device_name}','${device_type.device_description}','${device_type.is_active}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('Device type added')
      });
    }
  );
};

const deleteDeviceType = (req, res) => {
  const device_type = req.body;

  pool.query(
    `DELETE FROM devices_type WHERE id = '${device_type.id}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(200, () => {
        console.log(`Device type with ID: ${device.id} deleted.`)
      });
    }
  );
};

module.exports = {
  getDevicesType,
  addDeviceType,
  deleteDeviceType,
};
