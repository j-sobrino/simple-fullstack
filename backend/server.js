const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend to call the backend

const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  const now = new Date();
  res.json({ message: `Hello from backend! Current date/time: ${now.toLocaleString()}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
