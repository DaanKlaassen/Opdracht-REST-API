import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
import mainRouter from './routers/main.router';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'C:\\Users\\daank\\Downloads\\API\\index.html',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use('/api', mainRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});