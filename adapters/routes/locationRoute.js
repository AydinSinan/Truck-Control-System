const express=require('express')
const locationController=require("../controllers/locationController")

const router = express.Router()

router.route("/gps_list").get(locationController.getGPS);
router.route("/gps_append").post(locationController.appendGPS);

module.exports = router
