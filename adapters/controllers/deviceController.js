const pool = require("../db");

const getDevices = (req, res) => {
  pool.query("SELECT * FROM devices ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addDevice = (req, res) => {
  const device = req.body;

  pool.query(
    `INSERT INTO devices (vehicle_id,device_type_id,device_name,is_online,is_active) 
    VALUES ('${device.vehicle_id}','${device.device_type_id}','${device.device_name},'${device.is_online}','${device.is_active}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(201, () => {
        console.log('Device appending...')
      });
    }
  );
};

const updateDevice = (req, res) => {
  const device = req.body;
  pool.query(
    `UPDATE devices SET 
      vehicle_id = '${device.vehicle_id}', device_type_id = '${device.device_type_id}', device_name = '${device.device_name}',
      is_active = '${device.is_active}', is_online = '${device.is_online}' WHERE id = '${device.id}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(200, () => {
        console.log('Device is updating')
      });
    }
  );
};

const deleteDevice = (req, res) => {
  const device = req.body;

  pool.query(
    `DELETE FROM devices WHERE id = '${device.id}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(200, () => {
        console.log('Device is being deleted.')
      });
    }
  );
};

module.exports = {
  getDevices,
  addDevice,
  updateDevice,
  deleteDevice,
};
