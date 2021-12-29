const express=require('express')
const deviceTypeController=require("../controllers/deviceTypeController")

const router = express.Router()

router.route("/type_list").get(deviceTypeController.getDevicesType);
router.route("/type_add").post(deviceTypeController.addDeviceType);
router.route("/type_delete").delete(deviceTypeController.deleteDeviceType);

module.exports = router