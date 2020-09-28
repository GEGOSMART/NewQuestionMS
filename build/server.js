"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var index_1 = __importDefault(require("./routes/index"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        //Conectar a DB
        var mongoDB = "mongodb://ec2-34-236-37-250.compute-1.amazonaws.com/geosmartDB";
        mongoose_1.default.set('useFindAndModify', true);
        mongoose_1.default.connect(mongoDB || process.env.mongoDB, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(function (db) { return console.log("Base conectada"); });
        //Alojar en el puerto
        this.app.set('port', process.env.PORT || 3000);
        //Usar modulos
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
    };
    Server.prototype.routes = function () {
        this.app.use('/mNewQ', index_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on port', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
