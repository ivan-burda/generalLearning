const express = require("express");
const router = express.Router();

const {
  getPeople,
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.get("/:id", getPerson);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

//alternative setup to the one above
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);

module.exports = router;
