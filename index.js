const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON input

// GET route to verify the server is up
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// POST route to process data
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid input format. Expected an array.' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highest = alphabets.sort((a, b) =>
    b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0)
  )[0];

  res.json({
    is_success: true,
    user_id: "prachi_mittal30",  
    email: "22bcs15935@cuchd.in", 
    roll_number: "22BCS15935",  
    numbers,
    alphabets,
    highest_alphabet: highest ? [highest] : []
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
