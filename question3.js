const express = require('express');  
const app = express(); 
const port = 3000;  

// Define a route that handles GET requests to '/question2'
app.get('/question2', (req, res) => {
    res.json({ message: 'Express is working! Ismael Jose Jumao-as' });  // Send a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);  // Log a message when the server starts
});
