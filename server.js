const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any not-found request (catch all route)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after database connects
db.connect((err) => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    if (PORT === 3001) {
      console.log(`Server running on http://localhost:${PORT}`);
    }
  });
});
