const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'election',
  },
  console.log('Connected to the election database.')
);

// Default response for any not-found request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  if (PORT === 3001) {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
