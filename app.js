const express = require('express');
const app = express();
const port = 3103;
const POMGenerator = require('./POMGenerator.js');
const cors = require('cors')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Route to handle POST request
app.post('/generate-script', (req, res) => {
  const pomData = req.body;

  new POMGenerator(pomData.PageURL, pomData.TestElements, pomData.PageName)

  // Send a response back to the client
  res.send('Array received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
