import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import router from './routes/index';

class Server{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){

        //Conectar a DB

        const mongoDB = "mongodb+srv://admin:software2b@cluster0.5ge7q.mongodb.net/geodb?retryWrites=true&w=majority"
        mongoose.set('useFindAndModify',true);
        mongoose.connect( mongoDB || process.env.mongoDB ,{
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(
            db => console.log("Base conectada")
        );

        //Alojar en el puerto
        this.app.set('port', process.env.PORT || 3000);

        //Usar modulos
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(helmet());
    }

    routes(){
        this.app.use('/mNewQ',router);
    }
    
    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();