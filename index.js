const express = require("express");
const cors = require("cors"); // ✅ Add this line

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ Use CORS middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];

  for (let item of data) {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (isNaN(item)) {
      alphabets.push(item);
    }
  }

  const highest = alphabets
    .filter((ch) => ch === ch.toLowerCase())
    .sort()
    .slice(-1);

  res.json({
    is_success: true,
    user_id: "prachi_mittal30",
    email: "22bcs15935@cuchd.in",
    roll_number: "22BCS15935",
    numbers,
    alphabets,
    highest_alphabet: highest,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
