import {Request, Response, Router} from 'express'
import question from '../models/question';

class Index {

    public router : Router;
    
    constructor(){
        this.router = Router();
        this.routes();
    }

    
    async createQ(req: Request, res: Response){
        const newQ = new question(req.body);
        await newQ.save();
        res.json('Question created')
    }

    async readAllQ(req: Request, res: Response){
        const questions = await question.find();
        res.json(questions);
    }

    async readQ(req: Request, res: Response){
        const questions = await question.findById(req.params.id);
        res.json(questions);
    }

    async updateQ(req: Request, res: Response){
        await question.findByIdAndUpdate(req.params.id, req.body)
        res.json('Question');
    }

    async deleteQ(req: Request, res: Response){
        const questions = await question.findByIdAndRemove(req.params.id);
        res.json('Question deleted');
    }

    routes(){
        this.router.get('/getAll',this.readAllQ);
        this.router.get('/:id',this.readQ);
        this.router.post('/',this.createQ);
        this.router.put('/:id',this.updateQ);
        this.router.delete('/:id',this.deleteQ);
    }

}

const routes = new Index();
export default routes.router;
