const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; 

// Set up the Sequelize 
const sequelize = new Sequelize('database', 'root', 'root', {
  host: 'localhost', 
  dialect: 'mysql',
  logging: false,  
});

// Define User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Middleware 
app.use(express.json());

// Define route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();  // Fetch all users from the database
    res.json(users);  
  } catch (error) {
    console.error('Error fetching users:', error);  
    res.status(500).json({ message: 'Error fetching users' }); 
  }
});

// Sync the Sequelize models and start the server
sequelize.sync().then(() => {
  console.log('Database synced!'); 
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Start Express server
  });
});
