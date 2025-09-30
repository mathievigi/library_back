const authorController = require("../controllers/authorController")

const router = require("express").Router();



router.param("id", (req, res, next, value) => {
    if (!/^[0-9]+$/.test(value))
        return res.status(400).json({ error: "param id must be numeric" });
    next();
});

router.get("/", authorController.findAll);
router.get("/:id", authorController.findById);
router.post("/", authorController.create);
router.put("/:id", authorController.update);
router.delete("/:id", authorController.remove);

module.exports = router;