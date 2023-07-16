const {catchedAsync} = require("../utils");

module.exports = {
    getPlanets: catchedAsync(require("../controllers/getPlanets")),
    createPlanet: catchedAsync(require("../controllers/createPlanets"))
};