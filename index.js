import express from 'express';
import usersRouter from './routes/users.routes.js';
import loginRouter from './routes/auth.routes.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/login', loginRouter);

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

export default app;