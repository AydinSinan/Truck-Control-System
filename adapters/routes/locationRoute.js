const express=require('express')
const locationController=require("../controllers/locationController")

const router = express.Router()

router.route("/gps_list").get(locationController.getGPS);
router.route("/gps_add").post(locationController.addGPS);

module.exports = router