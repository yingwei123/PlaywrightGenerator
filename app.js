const express = require('express');
const app = express();
const port = 3103;
const ScriptGenerator = require('./ScriptGenerator');
const cors = require('cors')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Route to handle POST request
app.post('/generate-script', (req, res) => {
  const testInputs = req.body;

  // Log the received array to the console
  console.log('Received array:', testInputs);

  let scriptGen = new ScriptGenerator("https://www.facebook.com/", testInputs)
  scriptGen.downloadGeneratedScript("gen.spec.js")

  // Send a response back to the client
  res.send('Array received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
