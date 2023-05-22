const router = require("express").Router();

const reunionController = require("../controllers/reunionController");

// Create Reunion
router
  .route("/reunions")
  .post((req, res) => reunionController.create(req, res));

// Get all Reunions
router.route("/reunions").get((req, res) => reunionController.getAll(req, res));

// Get Reunion
router
  .route("/reunions/:id")
  .get((req, res) => reunionController.getOne(req, res));

// Delete Reunion
router
  .route("/reunions/:id")
  .delete((req, res) => reunionController.delete(req, res));

// Create Reunion
router
  .route("/reunions/:id")
  .post((req, res) => reunionController.update(req, res));

module.exports = router;
