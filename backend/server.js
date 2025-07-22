import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { filters } from './utils/filters.js';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Limite de requisições excedido. Por favor, aguarde 15 minutos.'
  },
  skip: (req) => {
    return req.body?.search?.length > 3;
  }
});

app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${req.body.search}`);
    const data = await response.json();
    
    const filtered = filters(data, req.body.idiom, req.body.available, req.body.year);

    console.log(filtered)

    res.status(200).json(filtered);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});