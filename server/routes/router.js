const router = require("express").Router();

// Reunions router
const reunionsRouter = require("./reunions");

router.use("/", reunionsRouter);

module.exports = router;
