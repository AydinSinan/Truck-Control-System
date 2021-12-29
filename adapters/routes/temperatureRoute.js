const express=require('express')
const temperatureController=require("../controllers/temperatureController")

const router = express.Router()

router.route("/temp_list").get(temperatureController.getTemps);
router.route("/temp_add").post(temperatureController.addTemp);

module.exports = router