const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/",controllers.getCharacters);
router.post("/",middlewares.charactersValidations,controllers.createCharacter);
//si hay name condicion que se encuentra en  charactersValidations.js
//pasa a controllers.create...
module.exports = router;