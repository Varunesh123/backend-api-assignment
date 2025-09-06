import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = 80;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Single route as required
app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User" });
});

// Health check route
app.get('/', (req, res) => {
  res.json({ status: "API is running on port 80" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});