const express = require('express');
const path = require('path');
const cors = require('cors'); // Import CORS package
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Send 'app.html' in response to root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
