//modulos response recibe desde ./response una function
//catchedAsync: recibe desde ./catchedAsync una function de orden superior
//errors: recibe desde ./errors una class ClientError que se extends de Error
module.exports = {
    response:require("./response"),
    catchedAsync: require("./catchedAsync"),
    errors:require("./errors")
};