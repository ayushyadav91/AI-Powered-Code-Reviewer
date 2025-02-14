require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;
const {db} = require('./config/config.js');



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});