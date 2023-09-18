export default class HttpError {
    constructor(message, code){
        supper(message);
        this.code = code;
    }
}