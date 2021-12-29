const pool = require("../db");

const getVehicles = (req, res) => {
    pool.query('SELECT * FROM vehicles ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const appendVehicle = (req, res) => {
    const vehicle = req.body
  
    pool.query(`INSERT INTO vehicles (vehicle_plate,current_status,is_active) 
    VALUES ('${vehicle.vehicle_plate}','${vehicle.current_status}','${vehicle.is_active}')`, (error, results) => {
      if (error) {
        throw error
      }
      res.send(201, () => {
        console.log('vehicle Tools is appending...')
      })
    })
  }

  const updateVehicle = (req, res) => {
    const vehicle = req.body
    pool.query(
      `UPDATE vehicles SET vehicle_plate = '${vehicle.vehicle_plate}', current_status = '${vehicle.current_status}',
       is_active = '${vehicle.is_active}' WHERE id = '${vehicle.id}'`,
      (error, results) => {
        if (error) {
          throw error
        }
        res.send(200, () => {
          console.log('Vehicle with ID : ${vehicle.id} updated')
        })
      }
    )
  }

  const deleteVehicle = (req, res) => {
    const vehicle = req.body
  
    pool.query(`DELETE FROM vehicles WHERE id = '${vehicle.id}'`, (error, results) => {
      if (error) {
        throw error
      }
      res.send(200, () => {
        console.log('Vehicle with ID: ${vehicle.id} deleted')
      })
    })
  }

  module.exports = {
    getVehicles,
    appendVehicle,
    updateVehicle,
    deleteVehicle
  }
