import express from 'express';
import productsRouter from './routers/products.route';
import usersRouter from './routers/users.route';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
