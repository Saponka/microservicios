class ClientError extends Error{
    //contiene un constructor con:
    //message, y un statusCode que por defecto sera 400
    constructor(message,statusCode = 400){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = { ClientError}