const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any not-found request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  if (PORT === 3001) {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});