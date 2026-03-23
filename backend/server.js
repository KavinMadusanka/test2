import colors from 'colors';
import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(colors.green(`Server is running development mode on port ${PORT}`));
});