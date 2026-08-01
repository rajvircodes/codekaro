import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


// Routes

app.get('/',(_req, res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to Codekaro API"
    });
});

export default app;