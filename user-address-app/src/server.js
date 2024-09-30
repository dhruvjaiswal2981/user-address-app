const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Address } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running...');
});


app.post('/register', async (req, res) => {
    const { name, address } = req.body;

    try {
        
        const user = await User.create({ name });

        
        await Address.create({ userId: user.id, address });

        res.status(201).json({ message: 'User and address registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});


app.get('/users', async (req, res) => {
    try {
        
        const users = await User.findAll({
            attributes: ['id', 'name', 'createdAt', 'updatedAt'] 
        });

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});


app.get('/addresses', async (req, res) => {
    try {
        
        const addresses = await Address.findAll({
            attributes: ['id', 'address' ,'createdAt', 'updatedAt'] 
        });

        res.status(200).json(addresses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching addresses', error: error.message });
    }
});


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
